import { UploadedFile } from "express-fileupload";
import jwt from "jsonwebtoken";
import ApiError from "../../../errors/ApiError";
import { File, Task } from "../../../models/models";
import FileService from "./FileService";

async function formTask(id: number) {
  const task = await Task.findOne({
    attributes: { exclude: ["createdAt", "updatedAt", "userId", "priority"] },
    where: { id },
  });
  if (!task) {
    throw ApiError.notFound("Invalid data", [
      "Invalid taskId: no task found with this taskId",
    ]);
  }
  let formedTask = { ...task.dataValues };
  const files = await File.findAll({
    attributes: { exclude: ["createdAt", "updatedAt", "path", "taskId"] },
    where: { taskId: task.dataValues.id },
  });
  return {
    ...formedTask,
    files,
  };
}

async function saveFilesOfNewTask(
  files: UploadedFile | UploadedFile[],
  taskId: number
) {
  if (Array.isArray(files) && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      await FileService.attachFile(files[i], { taskId });
    }
  } else if (files) {
    await FileService.attachFile(files as UploadedFile, { taskId });
  }
}

class TaskService {
  async getTasks(token: string) {
    const user = jwt.decode(token) as { id?: string } | null;
    if (!user || !user.id) {
      throw ApiError.unauthorized();
    }
    const tasks = await Task.findAll({
      where: { userId: user.id },
      order: [["createdAt", "DESC"]],
    });
    const formedTasks = await Promise.all(
      tasks.map((task: any) => formTask(task.id))
    );
    return formedTasks;
  }

  async createTask(
    title: string,
    description: string,
    files: UploadedFile[],
    token: string
  ) {
    const user = jwt.decode(token) as { id?: number } | null;
    if (!user || !user.id) {
      throw ApiError.unauthorized();
    }
    const task = await Task.create({
      title,
      description,
      userId: user.id,
      done: false,
    });
    if (files) {
      await saveFilesOfNewTask(files, task.dataValues.id);
    }
    const formedTask = await formTask(task.dataValues.id);
    return formedTask;
  }

  async deleteTask(taskId: string, token: string) {
    const user = jwt.decode(token) as { id?: number } | null;
    if (!user || !user.id) {
      throw ApiError.unauthorized();
    }
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      throw ApiError.notFound("Invalid data", [
        "Invalid taskId: no task found with this taskId",
      ]);
    }
    if (task.dataValues.userId !== user.id) {
      throw ApiError.forbidden("User does not have access to this resource");
    }
    const filesToDelete = await File.findAll({
      where: { taskId: task.dataValues.id },
    });
    for (let i = 0; i < filesToDelete.length; i++) {
      await FileService.deleteFile(filesToDelete[i].dataValues.image);
    }
    const deletedTaskId = await Task.destroy({ where: { id: taskId } });
    return !!deletedTaskId;
  }
}

export default new TaskService();
