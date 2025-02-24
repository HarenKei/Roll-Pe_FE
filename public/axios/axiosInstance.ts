import axios from "axios";
import { cookies } from "next/headers";
import { getToken } from "../utils/getCookies";

// credentials가 필요 없는 요청
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// credentials가 필요한 요청
export const axiosInstanceAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

axiosInstanceAuth.interceptors.request.use(
  async (config) => {
    const accessToken = cookies().get("accessToken");
    console.log("인터셉터!!");
    console.log(accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken.value}`;
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  }
)