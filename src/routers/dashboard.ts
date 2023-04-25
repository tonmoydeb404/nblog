import { Router } from "express";
import {
  createPost,
  deletePost,
  getCreatePost,
  getDashboard,
  getUpdatePost,
  updatePost,
} from "../controllers/dashboardControllers";
import formatResponse from "../middlewares/formatResponse";
import postValidator from "../validators/postValidator";

const dashboardRouter = Router();

dashboardRouter.route("/").get(formatResponse("Dashboard"), getDashboard);
dashboardRouter
  .route("/create")
  .get(formatResponse("Create Post"), getCreatePost)
  .post(formatResponse("Create Post"), postValidator, createPost);
dashboardRouter
  .route("/update/:id")
  .get(formatResponse("Update Post"), getUpdatePost)
  .post(formatResponse("Update Post"), postValidator, updatePost);
dashboardRouter.route("/delete/:id").get(deletePost);

export default dashboardRouter;
