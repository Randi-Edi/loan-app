import axios, { AxiosRequestConfig } from "axios";
export const API_URL = "http://localhost:8050/api/"
export const BASE_URL = "http://localhost:8050";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});



export const HTTP = {
  get: (url: string, axiosConfig?: AxiosRequestConfig) => {
    return axiosInstance.get(url, axiosConfig);
  },
  post: (url: string, data: any, axiosConfig?: AxiosRequestConfig) => {
    return axiosInstance.post(url, data, axiosConfig);
  },
  delete: (url: string, axiosConfig?: AxiosRequestConfig) => {
    return axiosInstance.delete(url, axiosConfig);
  },
  patch: (url: string, data: any, axiosConfig?: AxiosRequestConfig) => {
    return axiosInstance.patch(url, data, axiosConfig);
  },

};
