"use server";
import { axiosInstanceAuth } from "@/public/axios/axiosInstance";
import { cookies } from "next/headers";

//! 로그아웃
//! redux-persist에서 localstorage 접근하여 지우기
//! 각 로그아웃 케이스에 따른 로그아웃 처리

//! 토큰 refresh
//! 토큰 재발급 성공시 쿠키에 업데이트
//! 토큰 재발급 실패시 로그아웃

export const logOutOk = async () => {
  const refreshToken = cookies().get("refreshToken");

  refreshToken &&
    await axiosInstanceAuth.post("/user/logout", { refresh: refreshToken.value }).then((res) => {
      cookies().set("accessToken", "");
      cookies().set("refreshToken", "");


      return res.data.message;
    }).catch((error) => {
      console.log("logoutOk error");
      throw error;
    })
}
