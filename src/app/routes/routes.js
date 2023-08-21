// src/routes.js
const express = require("express");
const homeController = require("../controllers/HomeController");

const router = express.Router();

// Routes for videos
// router.post("/videos", homeController.createVideo);
router.get("/videos", homeController.getAllVideosThumbnail);
router.get("/videos/:id", homeController.getDetailVideo);
router.get("/videos/:id/products", homeController.getAllProductsByVideoId);
router.get("/videos/:id/comments", homeController.getAllCommentsByVideoId);
router.post("/videos/:id/comments", homeController.createComment);

module.exports = router;
