"use server";

import { axiosInstance, axiosInstanceAuth } from "@/public/axios/axiosInstance";

export const hotList = async () => {
  try {
    const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/paper/user?type=hot`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

}

export const userDashboard = async () => {
  try {
    const response = await axiosInstanceAuth.get(`${process.env.NEXT_PUBLIC_API_URL}/paper/mypage?type=main`);

    if (response.status === 200) {
      // console.log(response.data);
      return (response.data.data);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}