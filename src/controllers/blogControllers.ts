import { Post } from "../models/Post";
import asyncWrapper from "../utils/asyncWrapper";

export const getBlogs = asyncWrapper(async (_req, res) => {
  const posts = await Post.find({});
  res.locals.posts = posts;
  res.render("blog/home.ejs");
});
export const getBlog = asyncWrapper(async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.locals.post = post;
  res.render("blog/post.ejs");
});
