"use client";
import styled from "styled-components";
import Image from "next/image";
import {
  MainContentSectionWrapper,
  GuideContainer,
  GuideSectionTitle,
} from "../../ui/sections/MainSection";
import { COLORS } from "@/public/styles/colors";

const MainRollpeGuideSection02: React.FC = () => {
  return (
    <MainRollpeGuideSection02Wrapper>
      <GuideContainer>
        <GuideSectionTitle>
          함께 나누었던 추억,
          <br />
          언제 어디서나
        </GuideSectionTitle>
        <Image
          src={"/images/image/image_section_2.png"}
          width={305}
          height={406}
          alt={"롤페 설명1"}
        />
      </GuideContainer>
    </MainRollpeGuideSection02Wrapper>
  );
};

const MainRollpeGuideSection02Wrapper = styled(MainContentSectionWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.ROLLPE_SECTION_BACKGROUND};
`;

export default MainRollpeGuideSection02;
