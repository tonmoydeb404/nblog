import { Schema, model } from "mongoose";
import { SluggerOptions, plugin } from "mongoose-slugger-plugin";

export const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "category title is required"],
    },
    description: {
      type: String,
      required: [true, "category description is required"],
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
categorySchema.index(
  { title: 1, slug: 1 },
  { name: "title_slug", unique: true }
);
// slugger configuration
const sluggerOptions = new SluggerOptions({
  slugPath: "slug",
  generateFrom: "title",
  maxLength: 30,
  index: "title_slug",
});
// add the slugger plugin
categorySchema.plugin(plugin, sluggerOptions);

export const Category = model("category", categorySchema);
