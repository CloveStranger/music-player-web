import axios from "axios";
import type { AxiosResponse } from "axios";

axios.defaults.timeout = 120000;
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (reject) => {
    console.log(reject);
    return Promise.reject("Requset Failed");
  }
);

axios.interceptors.response.use(
  (resolve) => {
    return resolve;
  },
  (reject) => {
    return Promise.reject(reject);
  }
);

const basicRequestConfig = () => {
  const getRequest = (url: string, params?: any) => {
    return axios.get(url, { params: params ?? {} });
  };
  const postRequest = (url: string, params: any, config?: any) => {
    return axios.post(url, JSON.stringify(params), config ?? {});
  };
  const postFileRequest = (url: string, params: any, config?: any) => {
    return axios.post(url, JSON.stringify(params), {
      headers: { "Content-Type": "multipart/form-data" },
      ...config,
    });
  };
  return { getRequest, postRequest, postFileRequest };
};

export default basicRequestConfig();
