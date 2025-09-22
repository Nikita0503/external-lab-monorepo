import jwt from "jsonwebtoken";
import ApiError from "../../../errors/ApiError";
import { User } from "../../../models/models";

class UserService {
  async getCurrentUser(token: string) {
    const candidate = jwt.decode(token) as { id?: string } | null;
    if (!candidate || !candidate.id) {
      throw ApiError.unauthorized();
    }
    const user = await User.findOne({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      where: { id: candidate.id },
    });
    return user;
  }
}

export default new UserService();
