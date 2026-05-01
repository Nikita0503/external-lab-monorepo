import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { authTokens } from "./authTokens";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  // baseURL: "http://10.0.2.2:4000/api",
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = authTokens.accessToken;
    console.log(config.url, accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
