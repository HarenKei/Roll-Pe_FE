"use client";
import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { StyledInput } from "@/app/_components/ui/input/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./local-swiper.css";
import {
  RatioSwiperCard,
  ThemeSwiperCard,
  SizeSwiperCard,
} from "@/app/_components/ui/card/create-rollpe-swiper/CreateRollpeSipwerCard";
import Image from "next/image";
import DUMMY from "@/public/images/image/image_templete.png";
import { Button } from "@/app/_components/ui/button/StyledButton";
import { Modal } from "@/app/_components/ui/modal/Modal";
import ReceiverSelect from "@/app/_components/ui/modal/modal-contents/receiver-select/ReceiverSelect";

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

interface SizeSwiperCardData {
  id: number;
  title: string;
  max: number;
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
];

const THEME_CARD_LIST: ThemeSwiperCardData[] = [
  { id: 1, exam: <div></div>, title: "화이트" },
  { id: 2, exam: <div></div>, title: "블랙" },
  { id: 3, exam: <div></div>, title: "생일" },
  { id: 4, exam: <div></div>, title: "대통령" },
  { id: 5, exam: <div></div>, title: "설날" },
];

const SIZE_CARD_LIST: SizeSwiperCardData[] = [
  {
    id: 1,
    title: "A4",
    max: 13,
  },
];

const RollpeCreatePage: React.FC = () => {
  const [ratioSelected, setRatioSelected] = useState<number>(1);
  const [themeSelected, setThemeSelected] = useState<number>(1);
  const [sizeSelected, setSizeSelected] = useState<number>(1);
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [receiveUser, setReceiveUser] =
    useState<string>("전달할 사람을 지정해주세요.");
  const [receiveModalOpen, setReceiveModalOpen] = useState<boolean>(false);

  const onPublicClickHandler = () => {
    setIsPublic(!isPublic);
  };

  return (
    <>
      <RollpeCreatePageWrapper>
        <RollpeCreatePageContainer>
          <div className={"title-wrapper"}>
            <h1>롤페 만들기</h1>
          </div>

          <div className={"title-input-container"}>
            <h3>제목을 입력하세요</h3>
            <StyledInput type={"text"} placeholder="제목 입력" />
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
            <SwiperWrapper>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode]}
                className="sizeSwiperWrapper"
              >
                {SIZE_CARD_LIST.map(
                  (cardData: SizeSwiperCardData, index: number) => (
                    <SwiperSlide className={"sizeSwiperSlide"} key={index}>
                      <SizeSwiperCard
                        id={cardData.id}
                        title={cardData.title}
                        max={cardData.max}
                        isSelected={sizeSelected}
                        setIsSelected={setSizeSelected}
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </SwiperWrapper>
          </div>

          <div className={"public-select-container"}>
            <div className={"sub-title"}>
              <h3>공개 설정 여부</h3>
              <h4>링크를 가진 모든 분들이 볼 수 있어요.</h4>
            </div>
            <Tab isPublic={isPublic}>
              <button
                className={"tab-item public"}
                onClick={onPublicClickHandler}
              >
                <p>공개</p>
              </button>
              <button
                className={"tab-item private"}
                onClick={onPublicClickHandler}
              >
                <p>비공개</p>
              </button>
            </Tab>
            {isPublic || (
              <StyledInput type={"password"} placeholder={"비밀번호"} />
            )}
          </div>

          <div className={"end-select-container"}>
            <h3>종료일을 지정해주세요</h3>
            <StyledInput
              type={"datetime-local"}
              placeholder={"종료일을 선택해주세요"}
            />
          </div>

          <div className={"end-select-container"}>
            <h3>전달할 사람을 지정해주세요</h3>
            <button
              className={"receive-user-button"}
              onClick={() => {
                setReceiveModalOpen(true);
              }}
            >
              {receiveUser}
            </button>
          </div>

          <div className={"preview-container"}>
            <h3>미리보기</h3>
            <div className={"preview-wrapper"}>
              <Image src={DUMMY} alt={"미리보기"} layout="responsive" />
            </div>
          </div>

          <Button text={"만들기"} route={""} />
        </RollpeCreatePageContainer>
      </RollpeCreatePageWrapper>
      {receiveModalOpen && (
        <Modal
          title={"전달하기"}
          children={<ReceiverSelect />}
          setModalState={setReceiveModalOpen}
        />
      )}
    </>
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

  color: ${COLORS.ROLLPE_SECONDARY};
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 0.75rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;

    & > .sub-title {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    & > .preview-wrapper {
      width: 100%;

      & > img {
        width: 100%;
      }
    }

    & > .receive-user-button {
      all: unset;
      cursor: pointer;
      padding: 1rem;
      width: calc(100% - 2rem);
      border: 2px solid ${COLORS.ROLLPE_SECONDARY};
      border-radius: 1rem;
      font-size: 1.25rem;
    }
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

const Tab = styled.div<{ isPublic: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  width: calc(100% - 1rem);
  color: ${COLORS.ROLLPE_SECONDARY};
  background-color: #f1f1f1;
  border-radius: 1rem;

  & > .tab-item {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 45%;
    padding: 0.75rem 0.5rem;
    transition: color 0.2s ease;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .public {
    background-color: ${(props) =>
      props.isPublic ? COLORS.ROLLPE_PRIMARY : "transparent"};
  }

  .private {
    background-color: ${(props) =>
      !props.isPublic ? COLORS.ROLLPE_PRIMARY : "transparent"};
  }
`;

export default RollpeCreatePage;
