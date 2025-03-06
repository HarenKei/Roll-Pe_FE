"use client";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/public/redux/slices/userSlice";
import { googleLogin } from "@/app/api/oauth/callback/google/route";

const GoogleAuthHandler = () => {
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
        googleLogin(code).then((res) => {
          console.log(res);
          dispatch(
            setUser({
              id: res.user.id,
              name: res.user.name,
              email: res.user.email,
              identifyCode: res.user.identifyCode,
              proovider: res.user.provider,
            })
          );
          setTimeout(() => {
            router.push("/main");
          }, 500);
        });
      });
    }
  }, [code]);

  return null;
};

export default GoogleAuthHandler;
