import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { Post } from "../models/Post";
import asyncWrapper from "../utils/asyncWrapper";

export const getDashboard = asyncWrapper(async (_req, res, _next) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.locals.data = { posts };
  res.render("dashboard/home.ejs");
});

export const getCreatePost = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.render("dashboard/create.ejs");
};
export const createPost = asyncWrapper(async (req, res, _next) => {
  const result = validationResult(req);

  // send invalidate response
  if (!result.isEmpty()) {
    res.locals.errors = result.mapped();
    res.locals.data = req.body;
    res.render("dashboard/create.ejs");
    return;
  }

  // save post
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
  });
  await post.save();
  res.redirect("/dashboard");
});

export const getUpdatePost = asyncWrapper(async (req, res, _next) => {
  const id = req.params.id;
  const post = await Post.findOne({ _id: id });
  res.locals.data = post;
  res.render("dashboard/update.ejs");
});

export const updatePost = asyncWrapper(async (req, res, _next) => {
  const result = validationResult(req);
  const id = req.params.id;

  // send invalidate response
  if (!result.isEmpty()) {
    res.locals.errors = result.mapped();
    res.locals.data = { ...req.body, id };
    res.render("dashboard/update.ejs");
    return;
  }

  // update post
  await Post.findByIdAndUpdate(id, {
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
  });
  res.redirect("/dashboard");
});

export const deletePost = asyncWrapper(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/dashboard");
});
