import { validationResult } from "express-validator";
import { Category } from "../../models/Category";
import { Post } from "../../models/Post";
import asyncWrapper from "../../utils/asyncWrapper";

export const getPostList = asyncWrapper(async (_req, res, _next) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.locals.data = { posts };
  res.render("dashboard/posts/list.ejs");
});

export const getCreatePost = asyncWrapper(async (_req, res, _next) => {
  const categories = await Category.find({});
  res.locals.data = { categories, post: {} };
  res.render("dashboard/posts/create.ejs");
});
export const createPost = asyncWrapper(async (req, res, _next) => {
  const result = validationResult(req);

  // send invalidate response
  if (!result.isEmpty()) {
    const categories = await Category.find({});
    res.locals.errors = result.mapped();
    res.locals.data = { categories, post: req.body };
    res.render("dashboard/posts/create.ejs");
    return;
  }

  // save post
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
    category: req.body.category,
  });
  await post.save();
  res.redirect("/dashboard/posts");
});

export const getUpdatePost = asyncWrapper(async (req, res, _next) => {
  const id = req.params.id;
  const post = await Post.findOne({ _id: id });
  const categories = await Category.find({});
  res.locals.data = { post, categories };
  res.render("dashboard/posts/update.ejs");
});
export const updatePost = asyncWrapper(async (req, res, _next) => {
  const result = validationResult(req);
  const id = req.params.id;

  // send invalidate response
  if (!result.isEmpty()) {
    const categories = await Category.find({});
    res.locals.data = { post: { ...req.body, id }, categories };
    res.locals.errors = result.mapped();

    res.render("dashboard/posts/update.ejs");
    return;
  }

  // update post
  await Post.findByIdAndUpdate(id, {
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
    category: req.body.category,
  });
  res.redirect("/dashboard/posts");
});

export const deletePost = asyncWrapper(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/dashboard/posts/");
});
