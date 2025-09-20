import { check } from "express-validator";
import path from "path";

const loginValidators = () => {
  return [
    check("email").isEmail().withMessage("Not an email"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Not suitable length"),
  ];
};

const registrationValidators = () => {
  return [
    check("email").isEmail().withMessage("Not an email"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Not suitable length"),
    check("password")
      .not()
      .isNumeric()
      .withMessage("Password should contain letters"),
    check("name")
      .isLength({ min: 2 })
      .withMessage("Name is required"),
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

const editUserValidators = () => {
  return [
    check("name").optional().notEmpty().withMessage("Name is required"),
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

export { editUserValidators, loginValidators, registrationValidators };
