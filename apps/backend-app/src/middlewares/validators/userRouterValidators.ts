import { check } from "express-validator";
import path from "path";

const loginValidators = () => {
  return [
    check("email").isEmail().withMessage("Email is incorrect"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password should be at least 8 characters"),
  ];
};

const registrationValidators = () => {
  return [
    check("email").isEmail().withMessage("Email is incorrect"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password should be at least 8 characters"),
    check("password")
      .not()
      .isNumeric()
      .withMessage("Password should contain letters"),
    check("name")
      .isLength({ min: 2 })
      .withMessage("Name should be at least 2 characters"),
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
      .withMessage("Avatar should be image"),
  ];
};

export { loginValidators, registrationValidators };
