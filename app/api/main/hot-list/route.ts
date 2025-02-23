"use server";

import axios from "axios";

export const hotList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/paper/user?type=hot`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

}