import { NextFunction, Request, Response } from "express";

export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  res.send("get all posts");
};

export const getCreatePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("get create post page");
};
export const createPost = (req: Request, res: Response, next: NextFunction) => {
  res.send("create post");
};

export const getUpdatePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("get update post page");
};
export const updatePost = (req: Request, res: Response, next: NextFunction) => {
  res.send("update post");
};

export const deletePost = (req: Request, res: Response, next: NextFunction) => {
  res.send("delete post");
};
