import { check } from "express-validator";
import path from "path";

const loginValidators = () => {
  return [
    check("email")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      .withMessage("Invalid email"),
    check("password")
      .matches(/^(?=.*[a-zA-Z]).{8,}$/)
      .withMessage(
        "Invalid password: minimum 8 characters, must include letters"
      ),
  ];
};

const registrationValidators = () => {
  return [
    check("email")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      .withMessage("Invalid email"),
    check("password")
      .matches(/^(?=.*[a-zA-Z]).{8,}$/)
      .withMessage(
        "Invalid password: minimum 8 characters, must include letters"
      ),
    check("name")
      .isLength({ min: 2 })
      .withMessage("Invalid username: minimum 2 characters"),
    check("avatar")
      .custom((value, { req }) => {
        const avatar = req.files?.avatar?.name;
        if (!avatar) {
          return true;
        }
        var extension = path.extname(avatar).toLowerCase();
        if (
          extension === ".jpg" ||
          extension === ".jpeg" ||
          extension === ".png" ||
          extension === ".gif" ||
          extension === ".webp"
        ) {
          return true;
        } else {
          return false;
        }
      })
      .withMessage(
        "Invalid avatar: allowed formats are jpg, jpeg, png, gif, webp"
      ),
  ];
};

export { loginValidators, registrationValidators };
