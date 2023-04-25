import { Router } from "express";
import { getBlog, getBlogs } from "../controllers/blogControllers";
import formatResponse from "../middlewares/formatResponse";

const blogRouter = Router();

blogRouter.get("/", formatResponse("Home"), getBlogs);
blogRouter.get("/:id", formatResponse("Post"), getBlog);

export default blogRouter;
