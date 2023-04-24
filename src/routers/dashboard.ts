import { Router } from "express";
import {
  createPost,
  deletePost,
  getCreatePost,
  getDeletePost,
  getPosts,
  getUpdatePost,
  updatePost,
} from "../controllers/dashboardControllers";

const dashboardRouter = Router();

dashboardRouter.get("/", getPosts);
dashboardRouter.route("/create").get(getCreatePost).post(createPost);
dashboardRouter.route("/update/:id").get(getUpdatePost).put(updatePost);
dashboardRouter.route("/delete/:id").get(getDeletePost).delete(deletePost);

export default dashboardRouter;
