const {Comment} =require("../models/commentSchema.js");

const getComments = (req, res) => {
  Comment.find()
    .then((comments) => res.status(200).json(comments))
    .catch((err) => res.status(404).json(err.message));
};

const postComment = (req, res) => {
  const newComment = new Comment(req.body);
  newComment.save().then((comment) => res.json(comment));
};

const updateComment = (req, res) => {
  Comment.updateOne(
    { _id: req.params.id },
    {
      $set: { likeCount: req.body.likeCount },
    }
  )
    .then(() => res.status(200).json("comment updated")) 
    .catch((err) => res.status(404).json("error updating comment info"));
};


const deleteComment = (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => comment.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
};

module.exports={
updateComment,
getComments,
postComment,
deleteComment}
