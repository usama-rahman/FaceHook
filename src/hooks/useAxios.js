/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";
import axios from "axios";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    // Add a request intercepter

    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response

    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshtoken = auth?.refreshtoken;
            await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshtoken }
            );

            const { token } = response.data;

            setAuth({ ...auth, authToken: token });

            originalRequest.headers.Authorization = `Bearer ${authToken} `;

            return axios(originalRequest);
          } catch (error) {
            throw error();
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.request.eject(responseIntercept);
    };
  }, [auth.authToken]);

  return { api };
};

export default useAxios;
