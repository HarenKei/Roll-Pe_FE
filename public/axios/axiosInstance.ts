import axios from "axios";
import { cookies } from "next/headers";
import { getToken } from "../utils/getCookies";


export const axiosInstanceAuth = axios.create({
  withCredentials: true,
})

axiosInstanceAuth.interceptors.request.use(
  async (config) => {
    const accessToken = cookies().get("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  }
)