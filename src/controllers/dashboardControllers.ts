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
export const createPost = asyncWrapper(async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
  });

  await post.save();

  res.redirect("/dashboard");
});

export const getUpdatePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("dashboard/update.ejs");
};
export const updatePost = (req: Request, res: Response, next: NextFunction) => {
  res.send("update post");
};

export const getDeletePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("dashboard/delete.ejs");
};
export const deletePost = (req: Request, res: Response, next: NextFunction) => {
  res.send("delete post");
};
