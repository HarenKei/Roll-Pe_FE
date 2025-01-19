"use client";
import * as S from "@/public/styles/styled-components/main/main.style";
import Image from "next/image";
import MainIntroSection from "./_components/sections/main/MainIntroSection";
import MainRollpeGuideSection01 from "./_components/sections/main/MainRollpeGuideSection01";
import MainRollpeGuideSection02 from "./_components/sections/main/MainRollpeGuideSection02";
import MainRollpeGuideSection03 from "./_components/sections/main/MainRollpeGuidSection03";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

const Home: React.FC = () => {
  return (
    <MainPageContentsContainer>
      <MainIntroSection />
      <MainRollpeGuideSection01 />
      <MainRollpeGuideSection02 />
      <MainRollpeGuideSection03 />
    </MainPageContentsContainer>
  );
};

const MainPageContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 74px;

  width: 100%;
  height: 100%;

  position: relative;
`;

export default Home;
