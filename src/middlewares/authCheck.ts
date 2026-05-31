import { RequestHandler } from "express";
import { AppError } from "../utils/AppError";
import env from "../config/env";
import jwt from "jsonwebtoken";
import AuthPlayload from "../types/AuthPlayload";

const authCheck: RequestHandler = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw AppError.unauthorized("Access denied, because token does not exist");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as AuthPlayload;


    req.user = {
      id: decoded.id,
      iat: decoded.iat,
      exp: decoded.exp,
    };

    next();
  } catch (err) {
    next(AppError.unauthorized("Access denied, Token invalid"));
  }
};

export default authCheck;
