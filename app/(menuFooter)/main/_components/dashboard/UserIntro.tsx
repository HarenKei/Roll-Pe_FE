"use client";
import { useSelector } from "react-redux";
import { getUserRollpe } from "@/public/utils/apis/rollpe";
import { useEffect, useState, useTransition } from "react";
import { persistor, RootState } from "@/public/redux/store";
import Loading from "@/app/_components/ui/loading/Loading";
import { userIntroResponse } from "@/public/utils/types";
import { useRouter } from "next/navigation";

const UserIntro: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [userIntroInfo, setUserIntroInfo] = useState<userIntroResponse>({
    host: 0,
    heart: 0,
  });

  const getUserIntroInfo = () => {
    startTransition(async () => {
      await getUserRollpe("main")
        .then((res) => {
          setUserIntroInfo(res);
        })
        .catch((error) => {
          persistor.purge();
          alert("시간이 경과되어 로그아웃 되었습니다.\n다시 로그인해주세요.");
          setTimeout(() => {
            router.push("/sign-in");
          }, 500);
        });
    });
  };

  useEffect(() => {
    getUserIntroInfo();
  }, []);

  const user = useSelector((state: RootState) => state.simpleUser);
  return isPending ? (
    <Loading />
  ) : (
    <div className="intro">
      <h2>{user.name}님은</h2>
      <p>{userIntroInfo.host}개의 롤페를 만드셨어요.</p>
      <p>{userIntroInfo.heart}개의 마음을 작성하셨어요.</p>
    </div>
  );
};

export default UserIntro;
