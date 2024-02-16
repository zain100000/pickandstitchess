const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const gentsOrderController = require("../controllers/gentsOrderController");
const fileUploadMiddleware = require("../middleware/file-upload");

// Route to create a new GentsOrder
router.post(
  "/",
  fileUploadMiddleware.gentsfileUpload,
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
    gentsOrderController.createGentsOrder(req, res, next);
  }
);

// Route to get a specific GentsOrder by ID
router.get("/:id", gentsOrderController.getGentsOrderById);

// Route to get GentsOrders
router.get("/", gentsOrderController.getGentsOrder);

// Route to get GentsOrder samples
router.get("/:id/sample", gentsOrderController.getGentsOrderSample);

// Route to delete GentsOrders
router.delete("/:id", gentsOrderController.deleteGentsOrder);

module.exports = router;
