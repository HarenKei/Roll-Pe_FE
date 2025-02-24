"use client";
import { useSelector } from "react-redux";
import { userDashboard } from "@/app/api/main/main-page/route";
import { useEffect, useState, useTransition } from "react";
import { RootState } from "@/public/redux/store";
import Loading from "@/app/_components/ui/loading/Loading";

interface userIntroResponse {
  host: number;
  heart: number;
}
const UserIntro: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [userIntroInfo, setUserIntroInfo] = useState<userIntroResponse>({
    host: 0,
    heart: 0,
  });

  const getUserIntroInfo = () => {
    startTransition(async () => {
      try {
        const response = userDashboard().then((res) => {
          setUserIntroInfo(res);
        });
      } catch (error) {
        console.error(error);
        throw new Error();
      }
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
