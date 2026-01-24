import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  //baseURL: "http://10.0.2.2:4000/api",
});

export default axiosInstance;
