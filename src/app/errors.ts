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
  console.log(error.message);

  if (error.status) {
    res.status(error.status);
    res.locals.status = error.status;
    res.locals.text = error.message;
    res.locals.title = `${error.message} - Nblog`;
  } else {
    res.status(500);
    res.locals.title = "Server Error - Nblog";
    res.locals.status = 500;
    res.locals.text = "something wents to wrong";
  }

  res.render("error.ejs");
};
