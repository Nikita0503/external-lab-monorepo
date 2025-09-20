class ApiError extends Error {
  status: number;
  errors: any[];

  constructor(status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static unauthorized() {
    return new ApiError(401, "Unauthorized user");
  }

  static badRequest(message: string, errors: any = []) {
    return new ApiError(400, message, errors);
  }

  static internal(message: string) {
    return new ApiError(500, message);
  }

  static forbidden(message: string) {
    return new ApiError(403, message);
  }
}

export default ApiError;
