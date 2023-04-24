import { NextFunction, Request, Response } from "express";

export const getPosts = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.render("dashboard/home.ejs");
};

export const getCreatePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("dashboard/create.ejs");
};
export const createPost = (req: Request, res: Response, next: NextFunction) => {
  res.send("create post");
};

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
