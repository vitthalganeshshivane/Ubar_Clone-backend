const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { query } = require("express-validator");
const mapController = require("../controllers/map.controller");

router.get(
  "/get-coordinates",
  [
    query("address")
      .isString()
      .isLength({ min: 3 })
      .withMessage(
        "Address is required and must be at least 3 characters long."
      ),
  ],
  authMiddleware.authUser,
  mapController.getCoordinate
);

router.get(
  "/get-distace-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getDistanceTime
);

router.get(
  "/get-suggestions",
  query("input").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getAutoCompleteSuggestions
);

module.exports = router;
