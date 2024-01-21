const express = require("express");
const {
  getComments,
  postComment,
  updateComment,
  deleteComment,
} = require("../controllers/posts.js");


const router = express.Router();

//@route GET api/comments
//@desc GET All comments
router.get("/", getComments);

//@route POST api/comments
//@desc Create an comment
router.post("/", postComment);

//@route PATCH api/comment/:id
//@desc update a comment
router.patch("/:id", updateComment);

//@route DELETE api/comments/:id
//@desc DELETE a comment
router.delete("/:id", deleteComment);



module.exports = router;