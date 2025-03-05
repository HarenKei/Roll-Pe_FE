"use server";
import axios from "axios";
import { cookies } from "next/headers";

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

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken.value}`;
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  }
)

axiosInstanceAuth.interceptors.response.use(
  (response) => {
    return response;

  }, async (error) => {
    if (error.response.status === 401) {
      const refreshToken = cookies().get("refreshToken");

      if (refreshToken && !error.config._retry) {
        error.config._retry = true; // 무한 루프 방지를 위한 플래그 설정
        try {
          const response = await axiosInstance.post("/api/user/token/refresh", { refresh: refreshToken.value });
          console.log("토큰 재발급 성공");

          cookies().set("accessToken", response.data.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
          });

          error.config.headers.Authorization = `Bearer ${response.data.accessToken}`;

          return axiosInstanceAuth(error.config);
        } catch (error) {
          // 토큰 재발급 실패 시 쿠키에서 토큰 삭제
          cookies().set("accessToken", "");
          cookies().set("refreshToken", "");
          return Promise.reject(error);
        }
      }
    }
  }
)