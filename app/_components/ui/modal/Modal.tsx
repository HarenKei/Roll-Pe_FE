"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import Close from "@/public/images/icons/icon_close.svg";
import CloseWhite from "@/public/images/icons/icon_close_white.svg";
import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  setModalState,
}) => {
  const onCloseHandler = () => {
    setModalState(false);
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          <button className={"close-button"} onClick={onCloseHandler}>
            <Image src={Close} alt={"닫기"} layout="responsive" />
          </button>
          <h1 className={"title"}>{title}</h1>
          <div className={"dummy"} />
        </ModalHeader>
        <ModalContents>{children}</ModalContents>
      </ModalContainer>
    </ModalWrapper>
  );
};

export const BottomModal: React.FC<ModalProps> = ({
  title,
  children,
  setModalState,
}) => {
  return (
    <ModalWrapper>
      <BottomModalContainer>{children}</BottomModalContainer>
    </ModalWrapper>
  );
};

export const HeartModal: React.FC = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [bgColor, setBgColor] = useState<string>("#f2eb28");

  const onCloseHandler = () => {
    console.log("close");
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

  return (
    <HeartModalWrapper>
      <HeartModalHeader>
        <button className={"close-button"} onClick={onCloseHandler}>
          <Image src={CloseWhite} alt={"닫기"} layout="responsive" />
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
            id={"#f2eb28"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              changeColorHandler(e);
            }}
          ></button>
          <button
            className={"blue"}
            id={"#28e8f2"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              changeColorHandler(e);
            }}
          ></button>
          <button
            className={"pink"}
            id={"#f228d3"}
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

  .close-button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
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
  background-color: ${(props) => props.bgColor};
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

const ModalWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  padding: 10rem 1.25rem;
  width: calc(100% - 2.5rem);
  height: calc(100% - 20rem);
  background-color: rgba(0, 0, 0, 0.5);
  font-family: var(--font-hakgyoansim);
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

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  padding: 1.75rem 1.25rem;
  width: calc(100% - 5rem);
  background-color: ${COLORS.ROLLPE_PRIMARY};
  border-radius: 1rem;
`;

const BottomModalContainer = styled.div`
  position: absolute;
  bottom: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.75rem 1.25rem;

  width: calc(100% - 5rem);
  background-color: ${COLORS.ROLLPE_PRIMARY};
  border-radius: 2.975rem;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > .close-button {
    all: unset;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > .title {
    font-size: 1.75rem;
  }

  & > .dummy {
    flex-grow: 0;
  }
`;

const ModalContents = styled.div`
  width: 100%;
`;
