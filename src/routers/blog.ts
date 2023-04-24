import { Router } from "express";
import { getBlog, getBlogs } from "../controllers/blogControllers";

const blogRouter = Router();

blogRouter.get("/", getBlogs);
blogRouter.get("/:id", getBlog);

export default blogRouter;
