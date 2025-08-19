import { check } from "express-validator";
import path from "path";

const getTaskValidators = () => {
  return [check("taskId").isNumeric().withMessage("Must be a number")];
};

const createTaskValidators = () => {
  return [
    check("title").notEmpty().withMessage("Title is required"),
    check("description")
      .optional()
      .notEmpty()
      .withMessage("Description is required"),
    check("file")
      .custom((value, { req }) => {
        let files = req?.files?.file;
        if (!files) {
          return true;
        }
        if (!files?.length && files?.name) {
          files = [files];
        }
        for (let i = 0; i < files.length; i++) {
          var extension = path.extname(files[i].name).toLowerCase();
          if (
            extension !== ".jpg" &&
            extension !== ".jpeg" &&
            extension !== ".png" &&
            extension !== ".gif" &&
            extension !== ".webp"
          ) {
            return false;
          }
        }
        return true;
      })
      .withMessage("Files should be images"),
  ];
};

const editTaskValidators = () => {
  return [
    check("title").notEmpty().withMessage("Title is required"),
    check("description")
      .optional()
      .notEmpty()
      .withMessage("Description is required"),
    check("done")
      .notEmpty()
      .isBoolean()
      .withMessage("Done is required as boolean value"),
    check("file")
      .custom((value, { req }) => {
        let files = req?.files?.file;
        if (!files) {
          return true;
        }
        if (!files?.length && files?.name) {
          files = [files];
        }
        for (let i = 0; i < files.length; i++) {
          var extension = path.extname(files[i].name).toLowerCase();
          if (
            extension !== ".jpg" &&
            extension !== ".jpeg" &&
            extension !== ".png" &&
            extension !== ".gif" &&
            extension !== ".webp"
          ) {
            return false;
          }
        }
        return true;
      })
      .withMessage("Files should be images"),
  ];
};

const patchTaskValidators = () => {
  return [
    check("title").optional().notEmpty().withMessage("Title is required"),
    check("description")
      .optional()
      .notEmpty()
      .withMessage("Description is required"),
    check("done")
      .optional()
      .notEmpty()
      .isBoolean()
      .withMessage("Done is required as boolean value"),
    check("file")
      .custom((value, { req }) => {
        let files = req?.files?.file;
        if (!files) {
          return true;
        }
        if (!files?.length && files?.name) {
          files = [files];
        }
        for (let i = 0; i < files.length; i++) {
          var extension = path.extname(files[i].name).toLowerCase();
          if (
            extension !== ".jpg" &&
            extension !== ".jpeg" &&
            extension !== ".png" &&
            extension !== ".gif" &&
            extension !== ".webp"
          ) {
            return false;
          }
        }
        return true;
      })
      .withMessage("Files should be images"),
  ];
};

const deleteTaskValidators = () => {
  return [check("taskId").isNumeric().withMessage("Must be a number")];
};

export {
  createTaskValidators,
  deleteTaskValidators,
  editTaskValidators,
  getTaskValidators,
  patchTaskValidators,
};
