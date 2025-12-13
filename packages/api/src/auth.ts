import axiosInstance from "./axiosInstance";

export const loginApi = async (email: string, password: string) => {
  return axiosInstance.post("/auth/login", { email, password });
};

export const registrationApi = async (
  email: string,
  password: string,
  name: string,
  avatar?: any
) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("name", name);
  formData.append("password", password);
  if (avatar) {
    formData.append("avatar", avatar);
  }
  return axiosInstance.post("/auth/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
