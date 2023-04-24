import { NextFunction, Request, Response } from "express";
import createError, { HttpError } from "http-errors";

export const notFoundErrorHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next(createError(404, "endpoint not found"));
};

export const defaultErrorHandler = (
  error: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(error);

  if (error.status) {
    return res.status(error.status).send(error.message);
  }

  return res.status(500).send("something wents to wrong");
};
