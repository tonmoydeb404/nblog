import { NextFunction, Request, Response } from "express";

const asyncWrapper =
  (callback: (req: Request, res: Response, next: NextFunction) => any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default asyncWrapper;
