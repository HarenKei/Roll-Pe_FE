"use server";
import { axiosInstance, axiosInstanceAuth } from "@/public/axios/axiosInstance";
import { HeartCreateRequestBody } from "@/public/utils/types";

export const postCreateHeart = async (data: HeartCreateRequestBody) => {
  console.log(data);
  return await axiosInstanceAuth.post("/api/heart", { data }).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  })

}