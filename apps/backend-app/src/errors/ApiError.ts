class ApiError extends Error {
  status: number;
  errors?: any;

  constructor(status: number, message: string, errors?: any) {
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

  static notFound(message: string, errors: any) {
    return new ApiError(404, message, errors);
  }

  static conflict(message: string) {
    return new ApiError(409, message);
  }

  static internal(message: string) {
    return new ApiError(500, message);
  }
}

export default ApiError;
