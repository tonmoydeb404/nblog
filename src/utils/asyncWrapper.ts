import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const asyncWrapper =
  (callback: (req: Request, res: Response, next: NextFunction) => any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      next(createHttpError(500, "something wents to wrong!"));
    }
  };

export default asyncWrapper;
