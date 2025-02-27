"use client";

import Loading from "@/app/_components/ui/loading/Loading";
import GoogleAuthHandler from "./GoogleAuthHandler";

const KakaoRedirectPage: React.FC = () => {
  return (
    <>
      <Loading />
      <GoogleAuthHandler />
    </>
  );
};

export default KakaoRedirectPage;
