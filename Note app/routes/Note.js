// Packages
const express = require("express");

// Injections
const router = express.Router();

// Controllers
const Review_Controller = require("../controllers/Review");

// Routes
router.get("/getReviews", Review_Controller.GetReviews)

router.get("/getReview", Review_Controller.GetReview)

router.post("/addReview", Review_Controller.AddReview)

router.delete("/deleteReview", Review_Controller.DeleteReview)

// Export
module.exports = router;