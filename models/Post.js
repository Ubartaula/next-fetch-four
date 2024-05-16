import mongoose, { Schema, models, model } from "mongoose";

const postSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    title: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = models?.Post || model("Post", postSchema);

export default Post;
