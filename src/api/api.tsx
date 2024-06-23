import axios, { AxiosResponse } from "axios";
import { getToken } from "../utils/utilFunctions";

const baseURL: string | undefined = "https://todo-back-two.vercel.app/";
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:5000" // Local development server
  //   : process.env.REACT_APP_SERVER_URL; // Replace with your deployed server URL

const api = axios.create({
  baseURL: baseURL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getToken();

    // Ensure headers object exists
    config.headers = config.headers || {};

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
