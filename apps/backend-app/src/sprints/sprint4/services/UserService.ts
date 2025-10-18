import { UploadedFile } from "express-fileupload";
import jwt from "jsonwebtoken";
import ApiError from "../../../errors/ApiError";
import { User } from "../../../models/models";
import FileService from "./FileService";

class UserService {
  async getCurrentUser(token: string) {
    const candidate = jwt.decode(token) as { id?: string } | null;
    if (!candidate || !candidate.id) {
      throw ApiError.unauthorized();
    }
    const user = await User.findOne({
      attributes: { exclude: ["id", "password", "createdAt", "updatedAt"] },
      where: { id: candidate.id },
    });
    return user;
  }

  async editUser(token: string, name: string, avatar: UploadedFile) {
    const candidate = jwt.decode(token) as { id?: string } | null;
    if (!candidate || !candidate.id) {
      throw ApiError.unauthorized();
    }
    const user = await User.findOne({ where: { id: candidate.id } });
    let avatarData;
    if (avatar) {
      if (user?.dataValues.avatar) {
        FileService.deleteFile(user.dataValues.avatar);
      }
      avatarData = await FileService.saveFile(avatar);
    }
    await User.update(
      { name, avatar: avatarData?.fileName },
      { where: { id: user?.dataValues.id } }
    );
    const updatedUser = await User.findOne({
      attributes: { exclude: ["id", "password", "createdAt", "updatedAt"] },
      where: { id: candidate.id },
    });
    return updatedUser;
  }

  async deleteAvatar(token: string) {
    const candidate = jwt.decode(token) as { id?: string } | null;
    if (!candidate || !candidate.id) {
      throw ApiError.unauthorized();
    }
    const user = await User.findOne({ where: { id: candidate.id } });
    if (!user?.dataValues.avatar) {
      return false;
    }
    await FileService.deleteFile(user.dataValues.avatar);
    const updatedUserId = await User.update(
      { avatar: null },
      { where: { id: user.dataValues.id } }
    );
    return !!updatedUserId;
  }
}

export default new UserService();
