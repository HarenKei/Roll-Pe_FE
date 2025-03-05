"use client";
import { useEffect, useState, useTransition } from "react";
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
import { getRollpeCreateDetail } from "@/app/api/rollpe/route";
import { logOutOk } from "@/app/api/auth/log-out/route";
import Loading from "@/app/_components/ui/loading/Loading";

interface Option {
  id: number;
  name: string;
  query: Object;
  type: "SIZE" | "THEME" | "RATIO" | "COLOR";
  is_vip: boolean;
}

interface RatioOption extends Option {
  exam: React.ReactNode;
}

interface ThemeOption extends Option {
  exam: React.ReactNode;
}

interface SizeOption extends Option {
  max: number;
}

const RollpeCreateForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [ratioSelected, setRatioSelected] = useState<number>(1);
  const [themeSelected, setThemeSelected] = useState<number>(1);
  const [sizeSelected, setSizeSelected] = useState<number>(1);
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [receiveUser, setReceiveUser] =
    useState<string>("전달할 사람을 지정해주세요.");
  const [receiveModalOpen, setReceiveModalOpen] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<any[]>([]);

  const [ratioList, setLatioList] = useState<RatioOption[] | null>(null);
  const [themeList, setThemeList] = useState<ThemeOption[]>([]);
  const [sizeList, setSizeList] = useState<SizeOption[]>([]);
  const [colorList, setColorList] = useState<Option[]>([]);

  const onPublicClickHandler = () => {
    setIsPublic(!isPublic);
  };

  useEffect(() => {
    startTransition(() => {
      getRollpeCreateDetail("all")
        .then((res) => {
          setLatioList(
            res.data.filter((option: Option) => {
              return option.type === "RATIO";
            })
          );
          setSizeList(
            res.data.filter((option: Option) => {
              return option.type === "SIZE";
            })
          );
          setColorList(
            res.data.filter((option: Option) => {
              return option.type === "COLOR";
            })
          );

          setThemeList(
            res.data.filter((option: Option) => {
              return option.type === "THEME";
            })
          );
        })
        .catch((err) => {
          if (err.response.status === 404) {
            logOutOk();
          }
        });
    });
  }, []);

  useEffect(() => {
    console.log(themeList);
  }, [themeList]);

  return (
    <>
      {isPending && <Loading />}
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
                {ratioList &&
                  ratioList.map((cardData: RatioOption, index: number) => (
                    <SwiperSlide className={"ratioSwiperSlide"} key={index}>
                      <RatioSwiperCard
                        id={cardData.id}
                        title={cardData.name}
                        isSelected={ratioSelected}
                        setIsSelected={setRatioSelected}
                      />
                    </SwiperSlide>
                  ))}
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
                {themeList.map((cardData: ThemeOption, index: number) => (
                  <SwiperSlide className={"themeSwiperSlide"} key={index}>
                    <ThemeSwiperCard
                      id={cardData.id}
                      title={cardData.name}
                      isSelected={themeSelected}
                      setIsSelected={setThemeSelected}
                    />
                  </SwiperSlide>
                ))}
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
                {sizeList.map((cardData: SizeOption, index: number) => (
                  <SwiperSlide className={"sizeSwiperSlide"} key={index}>
                    <SizeSwiperCard
                      id={cardData.id}
                      title={cardData.name}
                      max={13}
                      isSelected={sizeSelected}
                      setIsSelected={setSizeSelected}
                    />
                  </SwiperSlide>
                ))}
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

export default RollpeCreateForm;
