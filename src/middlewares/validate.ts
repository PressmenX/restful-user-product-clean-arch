import { RequestHandler } from "express";
import { AppError } from "../utils/AppError";
import z from "zod";

const validate =
  (schema: z.ZodTypeAny): RequestHandler =>
  (req, _res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => issue.message);
      throw AppError.validationError(issues.join(", "));
    }

    req.body = result.data;
    next();
  };

export default validate;
