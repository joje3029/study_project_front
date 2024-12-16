import axios from "axios";
import { storage } from "@/utils/storage";
import { commonStore, loadingStore } from "@/stores/app";

const API_URL = import.meta.env.VITE_APP_API_SERVER_URL;

const loading = loadingStore();

export const pythonRequest = {
  post: (uri: string, param: any): any => {
    return axios.post(`${uri}`, param);
  },
};

export const request = {
  post: (uri: string, param: any): any => {
    return axios.post(`${API_URL}${uri}`, param);
  },
  get: (uri: string, param: any): any => {
    return axios.get(`${API_URL}${uri}`, { params: param });
  },
  delete: (uri: string, param: any): any => {
    return axios.delete(`${API_URL}${uri}`, param);
  },
  postFile: (uri: string, param: any, attachment: any, progress: any): any => {
    const formData = new FormData();
    for (const key in attachment) {
      if (Object.prototype.hasOwnProperty.call(attachment, key)) {
        const value = attachment[key];
        if (Array.isArray(value)) {
          for (const file of value) {
            formData.append(key, file);
          }
        }
      }
    }
    formData.append("param", JSON.stringify(param));

    return axios.post(`${API_URL}${uri}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: progress,
    });
  },
};

// axios.defaults.withCredentials = true;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.interceptors.request.use(
  (config) => {
    loading.setLoading(true);
    const token = storage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    loading.setLoading(false);
    const store = commonStore();
    const errorMsg = error.response?.data.errorMessage;
    store.setSnackbarMsg({
      text: errorMsg === true ? errorMsg : "에러가 발생하였습니다.",
      color: "error",
      result: 500,
    });

    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    loading.setLoading(false);
    return response;
  },
  (error) => {
    loading.setLoading(false);
    const store = commonStore();
    const errorMsg = error.response?.data.errorMessage;
    console.log(errorMsg);
    store.setSnackbarMsg({
      text: errorMsg === true ? errorMsg : "에러가 발생하였습니다.",
      color: "error",
      result: 500,
    });

    return Promise.reject(error);
  },
);
