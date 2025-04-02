"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import Close from "@/public/images/icons/icon_close.svg";
import CloseWhite from "@/public/images/icons/icon_close_white.svg";
import React from "react";

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
  const onCloseHandler = () => {
    console.log("close");
  };

  return (
    <HeartModalWrapper>
      <HeartModalHeader>
        <button className={"close-button"} onClick={onCloseHandler}>
          <Image src={CloseWhite} alt={"닫기"} layout="responsive" />
        </button>
      </HeartModalHeader>
      <HeartEditWrapper>
        <HeartWrapper></HeartWrapper>
        <HeartColorPicker>
          <div className={"yellow"}></div>
          <div className={"blue"}></div>
          <div className={"pink"}></div>
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

const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 24rem;
  background-color: white;
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

  & > div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  & > .yellow {
    background-color: yellow;
  }

  & > .blue {
    background-color: blue;
  }

  & > .pink {
    background-color: pink;
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
