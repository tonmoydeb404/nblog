import { NextFunction, Request, Response } from "express";

const formatResponse =
  (title: string | undefined = undefined) =>
  (_req: Request, res: Response, next: NextFunction) => {
    res.locals.title = title ? `${title} - Nblog` : "Nblog";
    next();
  };

export default formatResponse;
