"use client";
import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { TextInput } from "@/app/_components/ui/input/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./local-swiper.css";
import {
  RatioSwiperCard,
  ThemeSwiperCard,
} from "@/app/_components/ui/card/create-rollpe-swiper/CreateRollpeSipwerCard";

interface RatioSwiperCardData {
  id: number;
  exam: React.ReactNode;
  title: string;
}

interface ThemeSwiperCardData {
  id: number;
  exam: React.ReactNode;
  title: string;
}

const RATIO_CARD_LIST: RatioSwiperCardData[] = [
  {
    id: 1,
    exam: (
      <div
        style={{
          width: "5rem",
          height: "3.438rem",
          boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)",
          background: `${COLORS.ROLLPE_PRIMARY}`,
        }}
      ></div>
    ),
    title: "가로",
  },
  {
    id: 2,
    exam: (
      <div
        style={{
          width: "3.438rem",
          height: "5rem",
          boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)",
          background: `${COLORS.ROLLPE_PRIMARY}`,
        }}
      ></div>
    ),
    title: "세로",
  },
  {
    id: 3,
    exam: (
      <div
        style={{
          width: "4.5rem",
          height: "4.5rem",
          boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)",
          background: `${COLORS.ROLLPE_PRIMARY}`,
        }}
      ></div>
    ),
    title: "정방형",
  },
];

const THEME_CARD_LIST: ThemeSwiperCardData[] = [
  { id: 1, exam: <div></div>, title: "화이트" },
  { id: 2, exam: <div></div>, title: "블랙" },
  { id: 3, exam: <div></div>, title: "생일" },
  { id: 4, exam: <div></div>, title: "대통령" },
  { id: 5, exam: <div></div>, title: "설날" },
];

const RollpeCreatePage: React.FC = () => {
  const [ratioSelected, setRatioSelected] = useState<number>(1);
  const [themeSelected, setThemeSelected] = useState<number>(1);

  return (
    <RollpeCreatePageWrapper>
      <RollpeCreatePageContainer>
        <div className={"title-wrapper"}>
          <h1>롤페 만들기</h1>
        </div>

        <div className={"title-input-container"}>
          <h3>제목을 입력하세요</h3>
          <TextInput type={"text"} placeholder="제목 입력" />
        </div>

        <div className={"ratio-select-container"}>
          <h3>비율을 선택하세요</h3>
          <SwiperWrapper>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              freeMode={true}
              modules={[FreeMode]}
              className="ratioSwiperWrapper"
            >
              {RATIO_CARD_LIST.map(
                (cardData: RatioSwiperCardData, index: number) => (
                  <SwiperSlide className={"ratioSwiperSlide"} key={index}>
                    <RatioSwiperCard
                      id={cardData.id}
                      exam={cardData.exam}
                      title={cardData.title}
                      isSelected={ratioSelected}
                      setIsSelected={setRatioSelected}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </SwiperWrapper>
        </div>

        <div className={"theme-select-container"}>
          <h3>테마를 선택하세요</h3>
          <SwiperWrapper>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              freeMode={true}
              modules={[FreeMode]}
              className="themeSwiperWrapper"
            >
              {THEME_CARD_LIST.map(
                (cardData: ThemeSwiperCardData, index: number) => (
                  <SwiperSlide className={"themeSwiperSlide"} key={index}>
                    <ThemeSwiperCard
                      id={cardData.id}
                      exam={cardData.exam}
                      title={cardData.title}
                      isSelected={themeSelected}
                      setIsSelected={setThemeSelected}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </SwiperWrapper>
        </div>

        <div className={"size-select-container"}>
          <h3>크기를 선택하세요</h3>
        </div>

        <div className={"public-select-container"}>
          <h3>공개 설정 여부</h3>
        </div>

        <div className={"end-select-container"}>
          <h3>종료 일시를 지정해주세요</h3>
        </div>

        <div className={"preview-container"}>
          <h3>미리보기</h3>
        </div>
      </RollpeCreatePageContainer>
    </RollpeCreatePageWrapper>
  );
};

const RollpeCreatePageWrapper = styled.main`
  padding: 2.5rem 1.25rem;
  width: calc(100% - 2.5rem);
  font-family: var(--font-hakgyoansim);
`;

const RollpeCreatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 2.5rem 0rem;

  width: 100%;

  h3 {
    color: ${COLORS.ROLLPE_SECONDARY};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
  }

  & > .title-wrapper > h1 {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SwiperWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default RollpeCreatePage;
