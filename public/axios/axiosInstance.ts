import axios from "axios";
import { cookies } from "next/headers";
import { getToken } from "../utils/getCookies";
import { logOutOk } from "@/app/api/auth/log-out/route";

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
    console.log("인터셉터 에러!!");
    console.error(error.response);
    const refreshToken = cookies().get("refreshToekn");

    if (refreshToken) {
      try {
        const response = await axiosInstanceAuth.post(`/user/token/refresh`, {
          refresh: refreshToken.value,
        }).then((res) => {
          console.log("토큰 재발급 성공: ", res.data);
          cookies().set("accessToken", res.data.data.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          });
        })
      } catch (error) {
        try {
          logOutOk().then((res) => {
            console.log("로그아웃 성공");
            console.log(res);

          }).catch((error) => {
            console.log("로그아웃 에러 자동1");
          })
        } catch (error) {
          console.log("로그아웃 에러 자동2");
        }
      }
    }

  }
)