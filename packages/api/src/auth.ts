import axiosInstance from "./axiosInstance";

export const loginApi = async (email: string, password: string) => {
  return axiosInstance.post("/auth/login", { email, password });
};

export const registrationApi = async (
  email: string,
  password: string,
  name: string
) => {
  return axiosInstance.post("/auth/register", { email, password, name });
};
