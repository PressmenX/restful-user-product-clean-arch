type ErrorType =
  | "VALIDATION_ERROR"
  | "UNAUTHORIZED"
  | "FORBIDDEN_ACCESS"
  | "RESOURCE_NOT_FOUND"
  | "DATA_CONFLICT"
  | "INTERNAL_SERVER_ERROR";

class HttpError extends Error {
  constructor(
    message: string,
    public typeError: ErrorType,
    public statusCode: number,
  ) {
    super(message);
  }
}

const AppError = {
  validationError: (msg: string) => new HttpError(msg, "VALIDATION_ERROR", 400),
  unauthorized: (msg: string) => new HttpError(msg, "UNAUTHORIZED", 401),
  forbidden: (msg: string) => new HttpError(msg, "FORBIDDEN_ACCESS", 403),
  notFound: (msg: string) => new HttpError(msg, "RESOURCE_NOT_FOUND", 404),
  conflict: (msg: string) => new HttpError(msg, "DATA_CONFLICT", 409),
  serverError: (msg: string) =>
    new HttpError(msg, "INTERNAL_SERVER_ERROR", 500),
};

export { HttpError, AppError, ErrorType };
