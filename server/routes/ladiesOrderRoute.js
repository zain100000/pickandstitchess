const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const ladiesOrderController = require("../controllers/ladiesOrderController");
const fileUploadMiddleware = require("../middleware/file-upload");

// Route to create a new LadiesOrders
router.post(
  "/",
  fileUploadMiddleware.ladiesfileUpload,
  [
    check("name").not().isEmpty(),
    check("mobile").isLength({ min: 11 }),
    check("address").not().isEmpty(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    ladiesOrderController.createLadiesOrder(req, res, next);
  }
);

// Route to update a specific Ladies  Order
router.patch(
  "/:id",
  [
    check("product_pic").not().isEmpty(),
    check("product").not().isEmpty(),
    check("price").not().isEmpty(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    ladiesOrderController.updateLadiesOrder(req, res, next);
  }
);

// Route to get a specific Ladies Order by ID
router.get("/:id", ladiesOrderController.getLadiesOrderById);

// Route to get Ladies Orders
router.get("/", ladiesOrderController.getLadiesOrder);

// Route to get Ladies Order samples
router.get("/:id/sample", ladiesOrderController.getLadiesOrderSample);

// Route to delete GentsOrders
router.delete("/:id", ladiesOrderController.deleteLadiesOrder);

module.exports = router;
