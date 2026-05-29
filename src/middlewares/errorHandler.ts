import { Request, Response, NextFunction } from "express";
import { ErrorType, HttpError } from "../utils/AppError";
import logger from "../config/logger";

interface ErrorResponse {
  status: "error";
  type: ErrorType;
  message: string;
}

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  logger.error(`An error occurred \n${err.stack}`)
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      status: "error",
      type: err.typeError,
      message: err.message,
    } satisfies ErrorResponse);
  }

  return res.status(500).json({
    status: "error",
    type: "INTERNAL_SERVER_ERROR",
    message : "An internal server error occurred."
  } satisfies ErrorResponse);
};


export default errorHandler