"use client";
import MainIntroSection from "./_components/Pages/onBoarding/MainIntroSection";
import MainRollpeGuideSection01 from "./_components/Pages/onBoarding/MainRollpeGuideSection01";
import MainRollpeGuideSection02 from "./_components/Pages/onBoarding/MainRollpeGuideSection02";
import styled from "styled-components";
import Footer from "./_components/Commons/UI/Layouts/Footer/Footer";

const Home: React.FC = () => {
  return (
    <MainPageContentsContainer>
      <MainIntroSection />
      <MainRollpeGuideSection01 />
      <MainRollpeGuideSection02 />
      <Footer />
    </MainPageContentsContainer>
  );
};

const MainPageContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  position: relative;
`;

export default Home;
