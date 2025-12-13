import { TaskPriority } from "@external-lab-monorepo/types";
import axiosInstance from "./axiosInstance";

export const fetchCommonTaskApi = async (
  page: number,
  tasksPerPage: number
) => {
  return await axiosInstance.get(
    `/tasks/all?page=${page}&tasksPerPage=${tasksPerPage}`
  );
};

export const fetchTasksApi = async () => {
  return axiosInstance.get("/tasks");
};

export const createTaskApi = async (
  title: string,
  description: string,
  files: any[],
  priority?: TaskPriority
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  if (priority) {
    formData.append("priority", priority);
  }
  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
  }

  return axiosInstance.post("/tasks", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editTaskApi = async (
  title: string,
  description: string,
  files: any[],
  done: boolean,
  priority?: TaskPriority
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("done", String(done));
  if (priority) {
    formData.append("priority", priority);
  }
  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
  }
  return axiosInstance.put("/tasks", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const partialEditTaskApi = async (id: string, done: boolean) => {
  return axiosInstance.patch("/tasks", { id, done });
};

export const deleteTaskApi = async (id: string) => {
  return axiosInstance.delete("/tasks", { data: { id } });
};
