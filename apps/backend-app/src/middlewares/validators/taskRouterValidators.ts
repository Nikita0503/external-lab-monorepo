import { check } from "express-validator";
import path from "path";

const getAllTasksValidators = () => {
  return [
    check("page").notEmpty().withMessage("Invalid page: page is required"),
    check("tasksPerPage")
      .notEmpty()
      .withMessage("Invalid tasksPerPage: tasksPerPage is required"),
  ];
};

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

const patchTaskValidators = () => {
  return [
    check("taskId")
      .notEmpty()
      .withMessage("Invalid taskId: taskId is required"),
    check("title")
      .optional()
      .isLength({ min: 2 })
      .withMessage("Invalid title: minimum 2 characters"),
    check("done")
      .optional()
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

const createTaskValidatorsWithPriority = () => {
  return [
    ...createTaskValidators(),
    check("priority")
      .isIn(["low", "high"])
      .withMessage(
        "Invalid priority: the priority must be either 'high' or 'low'"
      ),
  ];
};

const editTaskValidatorsWithPriority = () => {
  return [
    ...editTaskValidators(),
    check("priority")
      .isIn(["low", "high"])
      .withMessage(
        "Invalid priority: the priority must be either 'high' or 'low'"
      ),
  ];
};

const patchTaskValidatorsWithPriority = () => {
  return [
    ...patchTaskValidators(),
    check("priority")
      .optional()
      .isIn(["low", "high"])
      .withMessage(
        "Invalid priority: the priority must be either 'high' or 'low'"
      ),
  ];
};

export {
  createTaskValidators,
  createTaskValidatorsWithPriority,
  deleteTaskAttachmentValidators,
  deleteTaskValidators,
  editTaskValidators,
  editTaskValidatorsWithPriority,
  getAllTasksValidators,
  getTaskValidators,
  patchTaskValidators,
  patchTaskValidatorsWithPriority,
};
