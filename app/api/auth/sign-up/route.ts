"use server";

import axios from "axios";

interface SignUpInputs {
  name: string;
  email: string;
  password: string;
  sex?: boolean;
  birth?: string;
  phoneNumber?: string;
}

export const signUp = async (requestBody: SignUpInputs) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, {
      ...requestBody,
    });

    if (response.status === 200) {
      console.log("회원가입 API 응답: ", response.data);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

}