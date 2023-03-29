import axios from 'axios';
import { useEffect } from 'react';

import { axiosPrivateAPI } from '@/api/axios';

import useAuth from './useAuth';
import useRefreshToken from './useRefreshToken';

const useAxiosPrivate = () => {
  const axiosUserAPI = axios.create({
    baseURL: import.meta.env.VITE_USER_BASE_URL,
  });

  const axiosInterviewAPI = axios.create({
    baseURL: import.meta.env.VITE_INTERVIEW_BASE_URL,
  });
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const userRequestIntercept = axiosUserAPI.interceptors.request.use(
      (config: any) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
          config.headers['Content-Type'] = `application/json`;
          config.headers['X-TAWGL-USER'] = `anar`;
          config.headers['X-TAWGL-CLIENT'] = `anar`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const userResponseIntercept = axiosUserAPI.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosUserAPI(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    const interviewRequestIntercept = axiosInterviewAPI.interceptors.request.use(
      (config: any) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
          config.headers['Content-Type'] = `application/json`;
          config.headers['X-TAWGL-USER'] = `anar`;
          config.headers['X-TAWGL-CLIENT'] = `anar`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const interviewResponseIntercept = axiosInterviewAPI.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInterviewAPI(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosUserAPI.interceptors.request.eject(userRequestIntercept);
      axiosUserAPI.interceptors.response.eject(userResponseIntercept);
      axiosInterviewAPI.interceptors.request.eject(interviewRequestIntercept);
      axiosInterviewAPI.interceptors.response.eject(interviewResponseIntercept);
    };
  }, [auth, refresh]);

  return { axiosUserAPI, axiosInterviewAPI };
};

export default useAxiosPrivate;
