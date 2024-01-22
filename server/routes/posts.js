const express = require("express");
const {
  getComments,
  postComment,
  updateComment,
  deleteComment,
} = require("../controllers/posts.js");
const { jwtAuth } = require("../utils/auth.js");

const router = express.Router();

//@route GET api/comments
//@desc GET All comments
router.get("/", getComments);

//@route POST api/comments
//@desc Create an comment
router.post("/", jwtAuth, postComment);

//@route PATCH api/comment/:id
//@desc update a comment
router.patch("/:id", jwtAuth, updateComment);

//@route DELETE api/comments/:id
//@desc DELETE a comment
router.delete("/:id", jwtAuth , deleteComment);



module.exports = router;