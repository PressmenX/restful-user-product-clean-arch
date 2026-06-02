type ErrorType =
  | "BAD_REQUEST"
  | "VALIDATION_ERROR"
  | "UNAUTHORIZED"
  | "FORBIDDEN_ACCESS"
  | "RESOURCE_NOT_FOUND"
  | "DATA_CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | "UNSUPPORTED_MEDIA_TYPE";

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
  badRequest: (msg: string) => new HttpError(msg, "BAD_REQUEST", 400),
  unauthorized: (msg: string) => new HttpError(msg, "UNAUTHORIZED", 401),
  forbidden: (msg: string) => new HttpError(msg, "FORBIDDEN_ACCESS", 403),
  notFound: (msg: string) => new HttpError(msg, "RESOURCE_NOT_FOUND", 404),
  conflict: (msg: string) => new HttpError(msg, "DATA_CONFLICT", 409),
  unsupportedMedia: (msg: string) =>
    new HttpError(msg, "UNSUPPORTED_MEDIA_TYPE", 415),
  validationError: (msg: string) => new HttpError(msg, "VALIDATION_ERROR", 422),
  serverError: (msg: string) =>
    new HttpError(msg, "INTERNAL_SERVER_ERROR", 500),
};

export { HttpError, AppError, ErrorType };
