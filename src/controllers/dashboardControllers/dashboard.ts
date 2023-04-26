import { Post } from "../../models/Post";
import asyncWrapper from "../../utils/asyncWrapper";

export const getDashboard = asyncWrapper(async (_req, res, _next) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.locals.data = { posts };
  res.render("dashboard/home.ejs");
});
