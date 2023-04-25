import { Router } from "express";
import {
  createPost,
  deletePost,
  getCreatePost,
  getPosts,
  getUpdatePost,
  updatePost,
} from "../controllers/dashboardControllers";

const dashboardRouter = Router();

dashboardRouter.get("/", getPosts);
dashboardRouter.route("/create").get(getCreatePost).post(createPost);
dashboardRouter.route("/update/:id").get(getUpdatePost).post(updatePost);
dashboardRouter.route("/delete/:id").get(deletePost);

export default dashboardRouter;
