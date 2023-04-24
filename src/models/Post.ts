import { Schema, model } from "mongoose";

export const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "post title is required"],
    },
    description: {
      type: String,
      required: [true, "post description is required"],
    },
    content: {
      type: String,
      required: [true, "post content is required"],
    },
  },
  { timestamps: true }
);

export const Post = model("post", postSchema);
