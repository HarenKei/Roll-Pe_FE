"use client";
import styled from "styled-components";
import { Heart } from "@/public/utils/types";
import { COLORS } from "@/public/styles/colors";
import { useState } from "react";

interface HeartPaperProps {
  deg: number;
  margin: React.CSSProperties["margin"];
  vertical: boolean;
  data: Heart;
  isExpend: boolean;
  isEditOpen?: boolean;
  isEditOpenHandler?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeartPaper: React.FC<HeartPaperProps> = ({
  deg,
  margin,
  vertical,
  data,
  isExpend,
  isEditOpen,
  isEditOpenHandler,
}) => {
  const { author, content, color } = data || {};

  const onClickHandler = () => {
    if (isEditOpenHandler) {
      isEditOpenHandler(!isEditOpen);
    }
  };

  return (
    <HeartPaperWrapper isExpend={isExpend} onClick={onClickHandler}>
      <HeartPaperPreviewContainer
        isActive={data ? true : false}
        color={color}
        deg={deg}
        style={{ margin: margin }}
        vertical={vertical}
      >
        <ContentsWrapper>
          <p className={"content"}>
            {content}
            <span>{data && `-${author.name}`}</span>
          </p>
        </ContentsWrapper>
      </HeartPaperPreviewContainer>
    </HeartPaperWrapper>
  );
};

const HeartPaperWrapper = styled.button<{ isExpend: boolean }>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  ${(props) => (props.isExpend ? "cursor: pointer;" : "")};

  &:hover {
    transform: translateY(-0.5em);
    transition: transform 0.3s ease-in-out;
  }
`;

const HeartPaperPreviewContainer = styled.div<{
  isActive: boolean;
  color: string;
  deg: number;
  vertical: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 90%;
  min-width: 3.5em;

  @media (min-width: 768px) {
    max-height: 15em;
  }

  max-height: ${(props) => (props.vertical ? "12em" : "4em")};

  transform: rotate(${(props) => props.deg}deg);
  background: ${(props) => (props.isActive ? props.color : COLORS.ROLLPE_GRAY)};
  ${(props) => (props.isActive ? "border: none" : `border: 1px dashed black`)};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: var(--font-hakgyoanshim);
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5em;
  width: calc(100% - 1em);
  height: calc(100% - 1em);

  @media (min-width: 768px) {
    padding: 1em;
    width: calc(100% - 2em);
    height: calc(100% - 2em);
  }

  overflow: hidden;
  text-overflow: ellipsis;

  & > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.05em;
    font-family: var(--font-nanumpen);
    @media (min-width: 768px) {
      font-size: 1.25em;
    }
    font-size: 0.00125em;
    color: ${COLORS.ROLLPE_SECONDARY};
    line-height: auto;
    text-align: center;
    word-break: break-all;
  }
`;
