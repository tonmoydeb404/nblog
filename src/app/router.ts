import { Router } from "express";
import blogRouter from "../routers/blog";
import dashboardRouter from "../routers/dashboard";

const router = Router();

router.use("/dashboard", dashboardRouter);
router.use("/", blogRouter);

export default router;
