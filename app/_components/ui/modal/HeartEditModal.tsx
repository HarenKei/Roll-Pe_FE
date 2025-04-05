"use client";
import styled from "styled-components";
import { useState, useRef, useTransition, useEffect } from "react";
import { COLORS } from "@/public/styles/colors";
import { ModalWrapper } from "./Modal";
import CloseWhite from "@/public/images/icons/icon_close_white.svg";
import Image from "next/image";
import { HeartCreateRequestBody } from "@/public/utils/types";
import { request } from "http";
import { postCreateHeart } from "@/app/api/rollpe/heart/route";

interface HeartModalProps {
  paperFk: number;
  theme?: string;
  location: number;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeartModal: React.FC<HeartModalProps> = ({
  paperFk,
  theme,
  setModalState,
  location,
}) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [bgColor, setBgColor] = useState<string>("f2eb28");
  const [isPending, startTransition] = useTransition();
  const [requestBody, setRequestBody] =
    useState<HeartCreateRequestBody | null>();

  const onCloseHandler = () => {
    setModalState(false);
  };

  const createRequestBody = () => {
    setRequestBody({
      paperFk: paperFk,
      context: textRef.current?.value ? textRef.current?.value : "",
      color: bgColor,
      location: location,
    });
  };

  const changeColorHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const color = e.currentTarget.id;

    if (color) {
      setBgColor(color);
    }
  };

  const resizeTextArea = () => {
    if (textRef) {
      textRef.current!.style.height = "auto";
      let currentHeight = textRef.current!.scrollHeight;
      textRef.current!.style.height = `${currentHeight}px`;
    }
  };

  useEffect(() => {
    if (requestBody && requestBody.context !== "") {
      startTransition(async () => {
        await postCreateHeart(requestBody)
          .then((res) => {})
          .catch((err) => {});
      });
    }
  }, [requestBody]);

  return (
    <HeartModalWrapper>
      <HeartModalHeader>
        <button className={"close-button"} onClick={onCloseHandler}>
          <Image src={CloseWhite} alt={"닫기"} layout="responsive" />
        </button>
        <button className={"submit-button"} onClick={createRequestBody}>
          <p>완료</p>
        </button>
      </HeartModalHeader>
      <HeartEditWrapper>
        <HeartWrapper bgColor={bgColor}>
          <textarea
            maxLength={40}
            placeholder={`내용을 입력해주세요.\n(최대 40자)`}
            ref={textRef}
            onKeyDown={resizeTextArea}
            onKeyUp={resizeTextArea}
          />
        </HeartWrapper>
        <HeartColorPicker>
          <button
            className={"yellow"}
            id={"f2eb28"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              changeColorHandler(e);
            }}
          ></button>
          <button
            className={"blue"}
            id={"28e8f2"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              changeColorHandler(e);
            }}
          ></button>
          <button
            className={"pink"}
            id={"f228d3"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              changeColorHandler(e);
            }}
          ></button>
        </HeartColorPicker>
      </HeartEditWrapper>
    </HeartModalWrapper>
  );
};
const HeartModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .close-button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
  }

  .submit-button {
    all: unset;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: normal;
    color: ${COLORS.ROLLPE_PRIMARY};
    cursor: pointer;
  }
`;

const HeartWrapper = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 21.5rem;
  height: 23.5rem;
  background-color: ${(props) => `#${props.bgColor}`};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: var(--font-nanumpen);

  & > textarea {
    display: flex;
    justify-content: center;
    align-items: center;
    all: unset;
    width: 100%;
    max-height: 80%;

    &::placeholder {
      word-break: keep-all;
      color: ${COLORS.ROLLPE_SECONDARY};
    }

    line-height: auto;
    font-size: 3rem;
    text-align: center;
  }
`;

const HeartModalWrapper = styled(ModalWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.25rem;
  padding: 1rem;
  width: calc(100% - 2rem);

  height: 100svh;
`;

const HeartEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const HeartColorPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > button {
    all: unset;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
  }

  & > .yellow {
    background-color: #f2eb28;
  }

  & > .blue {
    background-color: #28e8f2;
  }

  & > .pink {
    background-color: #f228d3;
  }
`;

export default HeartModal;
