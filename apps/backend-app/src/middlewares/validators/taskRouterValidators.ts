import { check } from "express-validator";
import path from "path";

const getTaskValidators = () => {
  return [
    check("taskId")
      .notEmpty()
      .withMessage("Invalid taskId: taskId is required"),
  ];
};

const createTaskValidators = () => {
  return [
    check("title")
      .isLength({ min: 2 })
      .withMessage("Invalid title: minimum 2 characters"),
    check("files")
      .custom((value, { req }) => {
        let files = req?.files?.files;
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
      .withMessage(
        "Invalid files: allowed formats are jpg, jpeg, png, gif, webp"
      ),
  ];
};

const editTaskValidators = () => {
  return [
    check("taskId")
      .notEmpty()
      .withMessage("Invalid taskId: taskId is required"),
    check("title")
      .isLength({ min: 2 })
      .withMessage("Invalid title: minimum 2 characters"),
    check("done")
      .notEmpty()
      .isBoolean()
      .withMessage("Invalid done: must contain boolean value"),
    check("files")
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
      .withMessage(
        "Invalid files: allowed formats are jpg, jpeg, png, gif, webp"
      ),
  ];
};

const deleteTaskValidators = () => {
  return [
    check("taskId")
      .notEmpty()
      .withMessage("Invalid taskId: taskId is required"),
  ];
};

const deleteTaskAttachmentValidators = () => {
  return [
    check("taskId")
      .notEmpty()
      .withMessage("Invalid taskId: taskId is required"),
    check("fileId")
      .notEmpty()
      .withMessage("Invalid fileId: fileId is required"),
  ];
};

export {
  createTaskValidators,
  deleteTaskAttachmentValidators,
  deleteTaskValidators,
  editTaskValidators,
  getTaskValidators,
};
