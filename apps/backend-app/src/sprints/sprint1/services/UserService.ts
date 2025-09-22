import bcrypt from "bcryptjs";
import { UploadedFile } from "express-fileupload";
import jwt from "jsonwebtoken";
import ApiError from "../../../errors/ApiError";
import { User } from "../../../models/models";
import AttachmentService from "./AttachmentService";

const generateToken = (id: string, email: string, name: string) => {
  const accessToken = jwt.sign({ id, email, name }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
  });
  return accessToken;
};

class UserService {
  async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.unauthorized();
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      throw ApiError.unauthorized();
    }
    const accessToken = generateToken(user.id, user.email, user.name);
    return accessToken;
  }

  async registration(
    email: string,
    password: string,
    name: string,
    avatar?: UploadedFile
  ) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.conflict("A user with this email is already registered");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    let avatarData;
    if (avatar) {
      avatarData = await AttachmentService.saveFile(avatar);
    }
    const user = await User.create({
      email,
      password: hashPassword,
      name,
      avatar: avatarData?.fileName,
    });
    const accessToken = generateToken(user.id, user.email, user.name);
    return accessToken;
  }
}

export default new UserService();
