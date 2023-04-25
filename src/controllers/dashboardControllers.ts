import { NextFunction, Request, Response } from "express";
import { Post } from "../models/Post";
import asyncWrapper from "../utils/asyncWrapper";

export const getPosts = asyncWrapper(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const posts = await Post.find({});
    res.locals.posts = posts;
    res.render("dashboard/home.ejs");
  }
);

export const getCreatePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("dashboard/create.ejs");
};
export const createPost = asyncWrapper(async (req, res, _next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
  });

  await post.save();

  res.redirect("/dashboard");
});

export const getUpdatePost = asyncWrapper(
  async (req: Request, res: Response, _next: NextFunction) => {
    const id = req.params.id;
    const post = await Post.findOne({ _id: id });
    res.locals.post = post;
    res.render("dashboard/update.ejs");
  }
);
export const updatePost = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content,
      description: req.body.description,
    });
    res.redirect("/dashboard");
  }
);

export const deletePost = asyncWrapper(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/dashboard");
});
