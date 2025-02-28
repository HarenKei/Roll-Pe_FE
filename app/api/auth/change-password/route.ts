"use server";

import { axiosInstanceAuth } from "@/public/axios/axiosInstance";
import axios from "axios";

interface SignUpInputs {
  name: string;
  email: string;
  password: string;
  sex?: boolean;
  birth?: string;
  phoneNumber?: string;
}

// export const changePassword = async (requestBody: SignUpInputs) => {
//   return await axiosInstanceAuth.post("/user/signup", {...requestBody}).then((response) => {}).catch((error) =>{});
//   try {
//     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, {
//       ...requestBody,
//     });

//     if (response.status === 200) {
//       console.log("회원가입 API 응답: ", response.data);
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }

// }