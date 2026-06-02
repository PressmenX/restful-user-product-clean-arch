import { RequestHandler } from "express";
import { AppError } from "../utils/AppError";

const requireJsonContent: RequestHandler = (req, _res, next) => {
  const providedMethod = ["POST", "PUT", "PATCH"];

  if (!providedMethod.includes(req.method)) return next();

  const content = req.headers["content-type"];
  if (!content) throw AppError.badRequest("Content type is required");
  if (!content.includes("application/json")) {
    throw AppError.unsupportedMedia(
      "Content type is not supported, content type must be json format",
    );
  }

  next();
};

export default requireJsonContent;
