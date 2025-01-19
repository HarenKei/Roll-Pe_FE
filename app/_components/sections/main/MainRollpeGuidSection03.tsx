"use client";
import styled from "styled-components";
import {
  MainContentSectionWrapper,
  GuideContainer,
  GuideSectionTitle,
} from "../../ui/sections/MainSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import MainSwiperCard, {
  MainSwiperCardProps,
} from "../../ui/card/main-swiper/MainSwiperCard";
import "./local-styles/swiper.css";

const DUMMY_CARD_DATAS: MainSwiperCardProps[] = [
  {
    imageSrc: "/images/image/image_templete.png",
    title: "롤페 카드 01",
  },
  {
    imageSrc: "/images/image/image_templete.png",
    title: "롤페 카드 02",
  },
  {
    imageSrc: "/images/image/image_templete.png",
    title: "롤페 카드 03",
  },
  {
    imageSrc: "/images/image/image_templete.png",
    title: "롤페 카드 04",
  },
];

const MainRollpeGuideSection03: React.FC = () => {
  return (
    <MainRollpeGuideSection03Wrapper>
      <GuideContainer>
        <GuideSectionTitle>
          뜨거운 감동을 나눴던
          <br />
          롤페들
        </GuideSectionTitle>
        <SwiperWrapper>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode]}
            className="mainPageSwiper"
          >
            {DUMMY_CARD_DATAS.map((cardData, index) => (
              <SwiperSlide key={index} className="mainPageSwiper">
                <MainSwiperCard
                  imageSrc={cardData.imageSrc}
                  title={cardData.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </GuideContainer>
    </MainRollpeGuideSection03Wrapper>
  );
};

const MainRollpeGuideSection03Wrapper = styled(MainContentSectionWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const SwiperWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default MainRollpeGuideSection03;
