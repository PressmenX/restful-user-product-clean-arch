import AuthPlayload from "./AuthPlayload";

declare global {
  namespace Express {
    interface Request {
      user?: AuthPlayload;
    }
  }
}
