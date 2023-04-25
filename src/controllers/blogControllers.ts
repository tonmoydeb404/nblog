import createHttpError from "http-errors";
import { Post } from "../models/Post";
import asyncWrapper from "../utils/asyncWrapper";

export const getBlogs = asyncWrapper(async (_req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.locals.data = { posts };
  res.render("blog/home.ejs");
});
export const getBlog = asyncWrapper(async (req, res, next) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post) return next(createHttpError(404, "Post not found"));
  res.locals.title = post.title;
  res.locals.data = post;
  res.render("blog/post.ejs");
});
