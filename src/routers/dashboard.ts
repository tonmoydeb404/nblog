import { Router } from "express";
import {
  createPost,
  deletePost,
  getCreatePost,
  getPosts,
  getUpdatePost,
  updatePost,
} from "../controllers/dashboardControllers";
import formatResponse from "../middlewares/formatResponse";

const dashboardRouter = Router();

dashboardRouter.route("/").get(formatResponse("Dashboard"), getPosts);
dashboardRouter
  .route("/create")
  .get(formatResponse("Create Post"), getCreatePost)
  .post(createPost);
dashboardRouter
  .route("/update/:id")
  .get(formatResponse("Update Post"), getUpdatePost)
  .post(updatePost);
dashboardRouter.route("/delete/:id").get(deletePost);

export default dashboardRouter;
