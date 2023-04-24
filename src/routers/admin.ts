import { Router } from "express";
import {
  createPost,
  deletePost,
  getCreatePost,
  getPosts,
  getUpdatePost,
  updatePost,
} from "../controllers/adminControllers";

const adminRouter = Router();

adminRouter.get("/", getPosts);
adminRouter.route("/create").get(getCreatePost).post(createPost);
adminRouter.route("/:id").get(getUpdatePost).put(updatePost).delete(deletePost);

export default adminRouter;
