"use client";
import styled from "styled-components";
import Image from "next/image";
import {
  MainContentSectionWrapper,
  GuideContainer,
  GuideSectionTitle,
} from "../../ui/sections/MainSection";

const MainRollpeGuideSection03: React.FC = () => {
  return (
    <MainRollpeGuideSection03Wrapper>
      <GuideContainer>
        <GuideSectionTitle>
          뜨거운 감동을 나눴던
          <br />
          롤페들
          <br />
          스와이퍼 구현 예정
        </GuideSectionTitle>
      </GuideContainer>
    </MainRollpeGuideSection03Wrapper>
  );
};

const MainRollpeGuideSection03Wrapper = styled(MainContentSectionWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
`;

export default MainRollpeGuideSection03;
