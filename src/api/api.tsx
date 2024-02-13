import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from '../utils/utilFunctions';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

// Request interceptor
api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      
      // Ensure headers object exists
      config.headers = config.headers || {};
  
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
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
