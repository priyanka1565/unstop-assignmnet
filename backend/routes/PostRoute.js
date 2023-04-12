const express = require("express");
const router = express.Router();

const {
  createPost,
  getPostById,
  updatePostById,
  deletePostById,
  likePostById,
  unlikePostById,
} = require("../controller/PostController")

router.post("/createpost", createPost);
router.get("/:id", getPostById);
router.put("/:id", updatePostById);
router.delete("/:id", deletePostById);
router.post("/:id/like", likePostById);
router.post("/:id/unlike", unlikePostById);

module.exports = router;
