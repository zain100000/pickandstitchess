const mongoose = require("mongoose");
const fs = require("fs").promises;
const path = require("path");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const GentsOrder = require("../models/gentsOrderModel");

exports.createGentsOrder = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  try {
    const {
      product_pic,
      product,
      name,
      mobile,
      address,
      neck,
      pocket,
      daman,
      wrist,
      comment,
      type,
      price,
      legOpening,
      topStitch,
      embroidery,
      deliverycharges,
      total,
      availTime,
      date,
      time,
    } = req.body;

    const gentsOrder = new GentsOrder({
      product_pic,
      product,
      name,
      mobile,
      address,
      neck,
      pocket,
      daman,
      wrist,
      comment,
      type,
      price,
      legOpening,
      topStitch,
      embroidery,
      deliverycharges,
      total,
      availTime,
      samples: req.file ? req.file.path.replace(/\\/g, "/") : "",
      date,
      time,
    });

    await gentsOrder.save();
    res.status(201).json({ message: "Gents Order created successfully!" });
  } catch (error) {
    console.error("Error creating Gents Order:", error);
    const err = new HttpError("Failed To Create Gents Order!", 500);
    return next(err);
  }
};

exports.getGentsOrder = async (req, res) => {
  try {
    const gentsOrder = await GentsOrder.find();

    if (!gentsOrder) {
      return res.status(404).json({ message: "No Gents Orders Yet!" });
    }

    // Map each GentsOrder to include the samples URL
    const gentsOrderWithSamplesURL = gentsOrder.map((order) => ({
      ...order.toObject(),
      samples: order.samples ? `/api/gents/${order._id}/sample` : null,
    }));

    res.status(200).json({ GentsOrders: gentsOrderWithSamplesURL });
  } catch {
    const error = new HttpError("Failed To Gets Gents Order!", 500);
    return next(error);
  }
};

exports.getGentsOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const gentsOrder = await GentsOrder.findById(id);

    if (!gentsOrder) {
      return res
        .status(404)
        .json({ message: "Order not found for Provided Id" });
    }

    // Include the samples URL in the response
    const gentsOrderWithSamplesURL = {
      ...gentsOrder.toObject(),
      samples: gentsOrder.samples ? `/api/gents/${id}/sample` : null,
    };

    res.status(200).json({ GentsOrders: gentsOrderWithSamplesURL });
  } catch {
    const error = new HttpError("Order Not Found By Provided Id!.", 500);
    return next(error);
  }
};

exports.getGentsOrderSample = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gentsOrder = await GentsOrder.findById(id);

    if (!gentsOrder || !gentsOrder.samples) {
      return res.status(404).json({ message: "Samples not found." });
    }

    // Set the correct Content-Type header
    res.set("Content-Type", "image/jpeg"); // Adjust based on the actual image type

    // Use path.join to create an absolute path
    const absolutePath = path.join(__dirname, "..", gentsOrder.samples);

    // Send the samples file as an image
    res.sendFile(absolutePath);
  } catch (error) {
    console.error("Error fetching Gents Orders samples:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateGentsOrder = async (req, res, next) => {
  const { product_pic, product, price } = req.body;
  const Id = req.params.id;

  let gents;
  try {
    gents = await GentsOrder.findById(Id);
  } catch (err) {
    return next(err);
  }

  gents.product_pic = product_pic;
  gents.product = product;
  gents.price = price;

  try {
    await gents.save();
  } catch (err) {
    const error = new HttpError("Failed To Update Gents Order!.", 500);
    return next(error);
  }

  res.status(200).json({ gents: gents.toObject({ getters: true }) });
};

exports.deleteGentsOrder = async (req, res, next) => {
  const Id = req.params.id;

  // Check if the id is undefined or falsy
  if (!Id) {
    return res.status(400).json({ message: "Invalid Gents Order ID" });
  }

  let gents;
  try {
    gents = await GentsOrder.findById(Id).populate("samples");
  } catch (err) {
    const error = new HttpError("Failed To Delete Gents Order!.", 500);
    return next(error);
  }

  if (!gents) {
    // Send a response indicating that the Gent Order was not found
    return res.status(404).json({ message: "Gent Order not found." });
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // Check if gents.samples is defined
    if (gents.samples) {
      try {
        // Use fs.unlink to delete the sample file
        await fs.unlink(gents.samples);
      } catch (err) {
        console.error("Error deleting sample:", err);
      }
    }

    // Use deleteOne to remove the GentsOrder
    await GentsOrder.deleteOne({ _id: Id }, { session });

    // Commit the transaction
    await session.commitTransaction();

    // Send a success response after the transaction is completed
    res.status(200).json({ message: "Gent Order Deleted Successfully." });
  } catch (err) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();

    // Log the error
    console.error("Error deleting Gents Order:", err);

    // Send an error response
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    // End the session
    session.endSession();
  }
};
