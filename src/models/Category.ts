import { Schema, model } from "mongoose";
import { SluggerOptions, plugin } from "mongoose-slugger-plugin";
import { Post } from "./Post";

type CategoryType = {
  _id: Schema.Types.ObjectId;
  title: string;
  description: string;
  slug: string;
};

export const categorySchema = new Schema<CategoryType>(
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

// middleware
categorySchema.post("findOneAndDelete", async (doc) => {
  await Post.updateMany(
    { category: doc._id },
    { $unset: { category: 1 } },
    { multi: true }
  );
});

export const Category = model("category", categorySchema);
