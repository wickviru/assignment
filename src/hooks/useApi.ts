import axios, { AxiosRequestConfig } from 'axios';

const options: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const axiosUserAPI = axios.create({
  baseURL: import.meta.env.VITE_VITE_USER_BASE_URL,
});

const axiosInterviewAPI = axios.create({
  baseURL: import.meta.env.VITE_INTERVIEW_BASE_URL,
});

export const useApi = () => {
  // Add a request interceptor
  axiosUserAPI.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      // console.log({ config });
      // if (config.headers === undefined) {
      //   config.headers = {};
      // }
      config.headers = {
        'Content-Type': 'application/json',
      };
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  axiosUserAPI.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to
      // trigger Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this
      // function to trigger Do something with response error
      return Promise.reject(error.response.data);
    },
  );

  // Add a request interceptor
  axiosInterviewAPI.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      // console.log({ config });
      // if (config.headers === undefined) {
      //   config.headers = {};
      // }
      config.headers = {
        'Content-Type': 'application/json',
      };
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  axiosInterviewAPI.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to
      // trigger Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this
      // function to trigger Do something with response error
      return Promise.reject(error.response.data);
    },
  );

  return { axiosUserAPI, axiosInterviewAPI };
};
