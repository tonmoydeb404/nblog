import { NextFunction, Request, Response } from "express";

export const getBlogs = (req: Request, res: Response, next: NextFunction) => {
  res.render("blog/home.ejs");
};
export const getBlog = (req: Request, res: Response, next: NextFunction) => {
  res.render("blog/post.ejs");
};
