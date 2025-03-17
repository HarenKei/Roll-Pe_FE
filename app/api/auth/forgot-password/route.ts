"use server";
import { axiosInstance } from "@/public/axios/axiosInstance";

export const postForgotPassword = async (email: string) => {
  return await axiosInstance.post("/api/user/forgot-password", { email: email }).then((response) => {
    return Promise.resolve(response.data.message);
  }).catch((error) => {
    return Promise.reject();
  })
};

export const patchChangePassword = async (identifyCode: string | string[], newPassword: string) => {
  return await axiosInstance.patch("/api/user/forgot-password", { identifyCode, newPassword }).then((response) => {
    return Promise.resolve(response.data.message);
  }).catch((error) => {
    return Promise.reject();
  })
}