"use client";
import * as S from "@/public/styles/styled-components/main/main.style";
import Image from "next/image";
import MainIntroSection from "./_components/sections/main/MainIntroSection";
import MainRollpeGuideSection01 from "./_components/sections/main/MainRollpeGuideSection01";
import MainRollpeGuideSection02 from "./_components/sections/main/MainRollpeGuideSection02";
import MainRollpeGuideSection03 from "./_components/sections/main/MainRollpeGuidSection03";
import Footer from "./_components/ui/layouts/Footer";

const Home: React.FC = () => {
  return (
    <S.MainPageContainer>
      <S.MainPageContentsContainer>
        <MainIntroSection />
        <MainRollpeGuideSection01 />
        <MainRollpeGuideSection02 />
        <MainRollpeGuideSection03 />
        <Footer />
      </S.MainPageContentsContainer>
    </S.MainPageContainer>
  );
};

export default Home;
