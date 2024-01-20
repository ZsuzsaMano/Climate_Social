const mongoose =require ("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: [true, "comment is required"],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      //required: [true, "Picture is required"]
    },
    userId: {
      type: String,
    },
    userName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports={Comment}
