const Comment =require("../models/commentSchema.js");

const getComments = (req, res) => {
  Comment.find()
    .then((comments) => res.status(200).json(comments))
    .catch((err) => res.status(404).json(err.message));
};

const postComment = (req, res) => {
  const newComment = new Comment(req.body);
  newComment.save().then((comment) => res.json(comment));
};

const deleteComment = (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => comment.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
};

module.exports={
getComments,
 postComment,
deleteComment}
