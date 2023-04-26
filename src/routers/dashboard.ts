import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategoryList,
  getCreateCategory,
  getUpdateCategory,
  updateCategory,
} from "../controllers/dashboardControllers/categories";
import { getDashboard } from "../controllers/dashboardControllers/dashboard";
import {
  createPost,
  deletePost,
  getCreatePost,
  getPostList,
  getUpdatePost,
  updatePost,
} from "../controllers/dashboardControllers/posts";
import formatResponse from "../middlewares/formatResponse";
import categoryValidator from "../validators/categoryValidator";
import postValidator from "../validators/postValidator";

const dashboardRouter = Router();

dashboardRouter.route("/").get(formatResponse("Dashboard"), getDashboard);

// posts route
dashboardRouter.route("/posts").get(formatResponse("All Posts"), getPostList);
dashboardRouter
  .route("/posts/create")
  .get(formatResponse("Create Post"), getCreatePost)
  .post(formatResponse("Create Post"), postValidator, createPost);
dashboardRouter
  .route("/posts/update/:id")
  .get(formatResponse("Update Post"), getUpdatePost)
  .post(formatResponse("Update Post"), postValidator, updatePost);
dashboardRouter.route("/posts/delete/:id").get(deletePost);

// categories route
dashboardRouter
  .route("/categories")
  .get(formatResponse("All Categories"), getCategoryList);
dashboardRouter
  .route("/categories/create")
  .get(formatResponse("Create Categories"), getCreateCategory)
  .post(formatResponse("Create Categories"), categoryValidator, createCategory);
dashboardRouter
  .route("/categories/update/:id")
  .get(formatResponse("Update Categories"), getUpdateCategory)
  .post(formatResponse("Update Categories"), categoryValidator, updateCategory);
dashboardRouter.route("/categories/delete/:id").get(deleteCategory);

export default dashboardRouter;
