import axios from "axios";
import { AUTH } from "../utils/constants";

const header = {
  "Content-Type": "application/x-www-form-urlencoded",
};

export const apiService = axios.create({
  baseURL: "https://iassistant.ideas2it.com/api",
  headers: header,
});

apiService.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && !config.url?.includes(AUTH)) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401)
      localStorage.removeItem("accessToken")
      return Promise.reject(new Error("Unauthorized - Redirecting to login"));
  }
);
