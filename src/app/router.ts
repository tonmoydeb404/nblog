import { Router } from "express";
import adminRouter from "../routers/admin";
import blogRouter from "../routers/blog";

const router = Router();

router.use("/", blogRouter);
router.use("/admin", adminRouter);

export default router;
