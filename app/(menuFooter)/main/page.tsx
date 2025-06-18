"use client";
import {
  Button,
  ButtonSecondary,
} from "@/app/_components/ui/button/StyledButton";
import HotRollpeList from "@/app/_components/ui/list/Hot/HotRollpeList";
import UserIntroSection from "./_components/dashboard/UserIntro";
import styled from "styled-components";
import { useTransition } from "react";
import Loading from "@/app/_components/ui/loading/Loading";
import { getHotRollpeList } from "@/public/utils/apis/rollpe";

import React, { useEffect, useState } from "react";

const Main: React.FC = () => {
  const [hotRollpeList, setHotRollpeList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHotRollpeList()
      .then((res) => {
        setHotRollpeList(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <MainPageWrapper>
      {/**대시보드 및 롤페 쓰러 가기 섹션 */}
      <UserIntroSection />
      {/**지금 뜨고 있는 롤페 섹션 */}
      <section>
        {/*리스트 */}
        <h2>지금 뜨고 있는 롤페</h2>
        <HotRollpeList hotRollpeList={hotRollpeList} />
        {/**리스트 공통으로 뽑을 수 있지 않을까? */}
      </section>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
`;

export default Main;
