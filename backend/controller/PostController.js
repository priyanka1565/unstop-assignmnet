const PostModel = require("../model/PostMoel")
const UserModel = require("../model/UserModel")
var uniqid = require("uniqid");

// Create post
const createPost = async (req, res) => {
  try {
    const { content, user } = req.body;
    const FindUser = await UserModel.findOne({ _id: user });
    if (!FindUser) return res.status(400).send({ error: "User not found" });
    const post = new PostModel({
      content,
      id: uniqid(),
      user_id: FindUser._id,
    });
    await post.save();
    res.send(post);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

// Retrive post by Id
const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await PostModel.findOne({ id: id });
    res.send(post);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const updatePostById = async (req, res) => {
  try {
    const { content } = req.body;
    const id = req.params.id;
    const post = await PostModel.findOneAndUpdate({ id: id }, { content });
    console.log(content);
    res.send(post);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deletePostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await PostModel.deleteOne({ id: id });
    res.status(200).send("post deleted successfully");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const likePostById = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log(postId);
    const result = await PostModel.findOneAndUpdate(
      postId,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(201).send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const unlikePostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await PostModel.findOneAndUpdate(
      postId,
      { $inc: { likes: -1 } },
      { new: true }
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  createPost,
  getPostById,
  updatePostById,
  deletePostById,
  likePostById,
  unlikePostById,
};
