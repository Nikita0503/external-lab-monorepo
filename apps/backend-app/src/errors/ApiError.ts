import { Result, ValidationError } from "express-validator";

class ApiError extends Error {
  status: number;
  errors?: Result<ValidationError>;

  constructor(
    status: number,
    message: string,
    errors?: Result<ValidationError>
  ) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static badRequest(message: string, errors: any) {
    return new ApiError(400, message, errors);
  }

  static unauthorized() {
    return new ApiError(401, "User is not authorized");
  }

  static forbidden(message: string) {
    return new ApiError(403, message);
  }

  static conflict(message: string) {
    return new ApiError(409, message);
  }

  static internal(message: string) {
    return new ApiError(500, message);
  }
}

export default ApiError;
