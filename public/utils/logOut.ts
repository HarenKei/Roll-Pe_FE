"use client";
import { persistor } from "../redux/store";
import { useRouter } from "next/navigation";

const router = useRouter();

export const deleteLoginInfo = () => {
  persistor.purge();
  alert("로그아웃 되었습니다.");
  router.push("/");
}