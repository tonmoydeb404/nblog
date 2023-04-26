import { Router } from "express";
import { getBlog, getBlogs, getCategory } from "../controllers/blogControllers";
import formatResponse from "../middlewares/formatResponse";

const blogRouter = Router();

blogRouter.get("/", formatResponse("Home"), getBlogs);
blogRouter.get("/:slug", formatResponse("Category"), getCategory);
blogRouter.get("/:slug", formatResponse("Post"), getBlog);

export default blogRouter;
