import createHttpError from "http-errors";
import { Category } from "../models/Category";
import { Post } from "../models/Post";
import asyncWrapper from "../utils/asyncWrapper";

export const getBlogs = asyncWrapper(async (_req, res) => {
  const posts = await Post.find({})
    .sort({ createdAt: -1 })
    .populate("category");
  res.locals.data = { posts };
  res.render("blog/home.ejs");
});
export const getBlog = asyncWrapper(async (req, res, next) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    "category"
  );
  if (!post) return next(createHttpError(404, "Requested content not found"));
  res.locals.title = post.title;
  res.locals.data = post;
  res.render("blog/post.ejs");
});
export const getCategory = asyncWrapper(async (req, res, next) => {
  const category = await Category.findOne({ slug: req.params.slug });
  if (!category) return next();
  const posts = await Post.find({ category: category.id });

  res.locals.title = category.title;
  res.locals.data = { category, posts };
  res.render("blog/category.ejs");
});
