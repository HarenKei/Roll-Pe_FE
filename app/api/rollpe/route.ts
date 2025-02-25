"use server";
import { axiosInstance, axiosInstanceAuth } from "@/public/axios/axiosInstance";

export const getHotRollpeList = async () => {
  try {
    const response = await axiosInstance.get(`/paper/user?type=hot`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

}


export const getUserRollpe = async (queryParam: "my" | "main" | "inviting") => {
  return await axiosInstanceAuth.get(`/paper/mypage?type=${queryParam}`).then((res) => {
    return Promise.resolve(res.data.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
}