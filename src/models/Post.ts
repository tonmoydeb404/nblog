import { Schema, model } from "mongoose";
import { SluggerOptions, plugin } from "mongoose-slugger-plugin";

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
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

// slug index
postSchema.index({ title: 1, slug: 1 }, { name: "title_slug", unique: true });
// slugger configuration
const sluggerOptions = new SluggerOptions({
  slugPath: "slug",
  generateFrom: "title",
  maxLength: 30,
  index: "title_slug",
});
// add the slugger plugin
postSchema.plugin(plugin, sluggerOptions);

export const Post = model("post", postSchema);
