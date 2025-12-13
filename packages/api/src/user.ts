import axiosInstance from "./axiosInstance";

export const fetchCurrentUserApi = async () => {
  return axiosInstance.get("/users/me");
};

export const updateCurrentUserApi = async (name: string, avatar?: any) => {
  const formData = new FormData();
  formData.append("name", name);
  if (avatar) {
    formData.append("avatar", avatar);
  }
  return axiosInstance.put("/users/me", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteCurrentUserAvatarApi = async () => {
  return axiosInstance.delete("/users/me/avatar");
};
