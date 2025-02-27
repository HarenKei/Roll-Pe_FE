"use client";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { kakaoLogin } from "@/app/api/oauth/callback/kakao/route";
import { useDispatch } from "react-redux";
import { setUser } from "@/public/redux/slices/userSlice";

const KakaoAuthHandler = () => {
  const [code, setCode] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      new URL(window.location.href).searchParams.get("code") &&
        setCode(new URL(window.location.href).searchParams.get("code"));
    }
  }, []);

  useEffect(() => {
    if (code) {
      startTransition(async () => {
        kakaoLogin(code).then((res) => {
          dispatch(
            setUser({ name: res.data.user.name, email: res.data.user.email })
          );
          router.push("/main");
        });
      });
    }
  }, [code]);

  return null;
};

export default KakaoAuthHandler;
