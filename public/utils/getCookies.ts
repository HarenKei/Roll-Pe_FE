import { cookies } from "next/headers";

export const getToken = async () => {
  try {
    const accessToken = cookies().get("accessToken");
    const refreshToken = cookies().get("refreshToken");
    return { accessToken, refreshToken };
  } catch (error) {
    console.error(error);
  }
}