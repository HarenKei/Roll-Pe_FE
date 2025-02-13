"use server";

import { cookies } from "next/headers";
import axios from "axios";

export const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://dev.popping.world/api/user/signin", {
      email,
      password,
    });

    if (response.data.data.access && response.data.data.refresh) {
      console.log("🔹 API 응답:", response.data);
      console.log("✅ 쿠키 설정 시작");

      cookies().set("accessToken", response.data.data.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 1일 유지
      });

      cookies().set("refreshToken", response.data.data.refresh, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7일 유지
      });

      console.log("✅ 쿠키 설정 완료");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
