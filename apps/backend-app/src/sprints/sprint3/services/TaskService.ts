import { UploadedFile } from "express-fileupload";
import jwt from "jsonwebtoken";
import ApiError from "../../../errors/ApiError";
import { File, Task } from "../../../models/models";
import FileService from "./FileService";

async function formTask(id: string) {
  const task = await Task.findOne({
    attributes: { exclude: ["createdAt", "updatedAt", "userId", "priority"] },
    where: { id },
  });
  let formedTask = { ...task.dataValues };
  const files = await File.findAll({
    attributes: { exclude: ["createdAt", "updatedAt", "path", "taskId"] },
    where: { taskId: task.id },
  });
  return {
    ...formedTask,
    files,
  };
}

async function saveFilesOfNewTask(
  files: UploadedFile | UploadedFile[],
  taskId: string
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
  async getCommonTasks(page: number, tasksPerPage: number) {
    const offset = (page - 1) * tasksPerPage;
    const { count, rows: tasks } = await Task.findAndCountAll({
      limit: tasksPerPage,
      offset: offset,
      order: [["createdAt", "DESC"]],
      attributes: ["id", "title"],
    });
    return {
      tasks: tasks,
      taskTotalCount: count,
    };
  }

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

  async getFullTask(taskId: string) {
    const task = await Task.findOne({
      where: { id: taskId },
      order: [["createdAt", "DESC"]],
    });
    if (!task) {
      throw ApiError.notFound("Invalid data", [
        "Invalid taskId: no task found with this taskId",
      ]);
    }
    const formedTask = await formTask(task.id);
    return formedTask;
  }

  async createTask(
    title: string,
    description: string,
    files: UploadedFile[],
    token: string
  ) {
    const user = jwt.decode(token) as { id?: string } | null;
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
      await saveFilesOfNewTask(files, task.id);
    }
    const formedTask = await formTask(task.id);
    return formedTask;
  }

  async editTask(
    taskId: string,
    title: string,
    description: string,
    done: boolean,
    files: UploadedFile[],
    token: string
  ) {
    const user = jwt.decode(token) as { id?: string } | null;
    if (!user || !user.id) {
      throw ApiError.unauthorized();
    }
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      throw ApiError.notFound("Invalid data", [
        "Invalid taskId: no task found with this taskId",
      ]);
    }
    if (task.userId !== user.id) {
      throw ApiError.forbidden("User does not have access to this resource");
    }
    await Task.update({ title, description, done }, { where: { id: taskId } });
    if (files) {
      await saveFilesOfNewTask(files, task.id);
    }
    const formedTask = await formTask(taskId);
    return formedTask;
  }

  async patchTask(
    taskId: string,
    title: string,
    description: string,
    done: boolean,
    files: UploadedFile[],
    token: string
  ) {
    const user = jwt.decode(token) as { id?: string } | null;
    if (!user || !user.id) {
      throw ApiError.unauthorized();
    }
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      throw ApiError.notFound("Invalid data", [
        "Invalid taskId: no task found with this taskId",
      ]);
    }
    if (task.userId !== user.id) {
      throw ApiError.forbidden("User does not have access to this resource");
    }
    const updateData: any = {};
    if (title) {
      updateData.title = title;
    }
    if (description) {
      updateData.description = description;
    }
    if (done) {
      updateData.done = done;
    }
    if (Object.keys(updateData).length > 0) {
      await Task.update(updateData, { where: { id: taskId } });
    }
    if (files) {
      await saveFilesOfNewTask(files, task.id);
    }
    const formedTask = await formTask(taskId);
    return formedTask;
  }

  async deleteTask(taskId: string, token: string) {
    const user = jwt.decode(token) as { id?: string } | null;
    if (!user || !user.id) {
      throw ApiError.unauthorized();
    }
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      throw ApiError.notFound("Invalid data", [
        "Invalid taskId: no task found with this taskId",
      ]);
    }
    if (task.userId !== user.id) {
      throw ApiError.forbidden("User does not have access to this resource");
    }
    const deletedTaskId = await Task.destroy({ where: { id: taskId } });
    return !!deletedTaskId;
  }

  async deleteTaskAttachment(taskId: string, fileId: string, token: string) {
    const user = jwt.decode(token) as { id?: string } | null;
    if (!user || !user.id) {
      throw ApiError.unauthorized();
    }
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      throw ApiError.notFound("Invalid data", [
        "Invalid taskId: no task found with this taskId",
      ]);
    }
    if (task.userId !== user.id) {
      throw ApiError.forbidden("User does not have access to this resource");
    }
    const file = await File.findOne({
      where: { id: fileId },
    });
    if (!file) {
      throw ApiError.notFound("Invalid data", [
        "Invalid fileId: no file found with this fileId",
      ]);
    }
    if (file.dataValues.taskId != taskId) {
      throw ApiError.notFound("Invalid data", [
        "Invalid fileId: no file found for the task with this taskId",
      ]);
    }
    const isDeleted = await FileService.detachFile(fileId);
    return isDeleted;
  }
}

export default new TaskService();
