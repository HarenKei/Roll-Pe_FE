"use client";
import styled from "styled-components";
import Image from "next/image";
import {
  MainContentSectionWrapper,
  GuideContainer,
  GuideSectionTitle,
} from "../../ui/sections/MainSection";

const MainRollpeGuideSection01: React.FC = () => {
  return (
    <MainRollpeGuideSection01Wrapper>
      <GuideContainer>
        <GuideSectionTitle>
          쉽게 만드는
          <br />
          우리만의 롤페
        </GuideSectionTitle>
        <Image
          src={"/images/image/image_section_1.png"}
          width={305}
          height={406}
          alt={"롤페 설명1"}
        />
      </GuideContainer>
    </MainRollpeGuideSection01Wrapper>
  );
};

const MainRollpeGuideSection01Wrapper = styled(MainContentSectionWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
`;

export default MainRollpeGuideSection01;
