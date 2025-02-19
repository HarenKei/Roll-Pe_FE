"use server";

import { cookies } from "next/headers";
import axios from "axios";

export const signIn = async (email: string, password: string) => {

  try {
    const response = await axios.post("http://dev.popping.world/api/user/signin", {
      email,
      password,
    });

    if (response.data.data && response.data.data) {

      cookies().set("accessToken", response.data.data.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });

      cookies().set("refreshToken", response.data.data.refresh, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
    }

    return response.data.data.user;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) throw new Error(error.response.data.message);
  }
};
