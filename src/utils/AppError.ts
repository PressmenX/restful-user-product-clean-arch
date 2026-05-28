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

const thrower = (msg: string, type: ErrorType, code: number) => {
  throw new HttpError(msg, type, code);
};

const AppError = {
  validationError: (msg: string) => thrower(msg, "VALIDATION_ERROR", 400),
  unauthorized: (msg: string) => thrower(msg, "UNAUTHORIZED", 401),
  forbidden: (msg: string) => thrower(msg, "FORBIDDEN_ACCESS", 403),
  notFound: (msg: string) => thrower(msg, "RESOURCE_NOT_FOUND", 404),
  conflict: (msg: string) => thrower(msg, "DATA_CONFLICT", 409),
  serverError: (msg: string) => thrower(msg, "INTERNAL_SERVER_ERROR", 500),
};

export {HttpError, AppError, ErrorType}
