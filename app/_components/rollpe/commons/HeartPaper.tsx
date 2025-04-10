"use client";
import styled from "styled-components";
import { Heart } from "@/public/utils/types";
import { COLORS } from "@/public/styles/colors";
import { useEffect, useState } from "react";

interface HeartPaperProps {
  deg: number;
  margin: React.CSSProperties["margin"];
  vertical: boolean;
  data?: Heart;
  isExpend: boolean;
  isEditOpen?: boolean;
  isEditOpenHandler?: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setSelectedHeart?: React.Dispatch<React.SetStateAction<number>>;
}

export const HeartPaperPreview: React.FC<{
  deg: number;
  heartData: Heart | undefined;
  margin: React.CSSProperties["margin"];
}> = ({ deg, heartData, margin }) => {
  //deg는 고정이지만 heartData는 undefined일 수 있지...?
  //heartData가 undefined일 때를 고려한 디스트럭쳐링.
  const { content, author, color } = heartData || {};

  return (
    <PreviewWrapper>
      <PreviewContainer
        deg={deg}
        color={color ? color : COLORS.ROLLPE_GRAY}
        style={{ margin: margin }}
      >
        <ContentsWrapper>
          <p className={"content"}>
            {content}
            <span>{heartData ? `-${author?.name}` : ""}</span>
          </p>
        </ContentsWrapper>
      </PreviewContainer>
    </PreviewWrapper>
  );
};

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const PreviewContainer = styled.div<{ deg: number; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  min-width: 3.5rem;
  height: 90%;
  max-height: 4rem;

  background: ${(props) =>
    props.color === `${COLORS.ROLLPE_GRAY}`
      ? COLORS.ROLLPE_GRAY
      : `#${props.color}`};
  //props로 넘어오는 컬러는 #가 없는 string임....
  ${(props) =>
    props.color === `${COLORS.ROLLPE_GRAY}`
      ? `border: 1px dashed ${COLORS.ROLLPE_SECONDARY};`
      : `border: none;`}
  transform: rotate(${(props) => props.deg}deg);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: var(--font-nanumpen);
`;

export const HeartPaper: React.FC<HeartPaperProps> = ({
  deg,
  margin,
  vertical,
  data,
  isExpend,
  isEditOpen,
  isEditOpenHandler,
  index,
  setSelectedHeart,
}) => {
  const { author, content, color } = data || {};

  const onClickHandler = () => {
    if (content === undefined) {
      setSelectedHeart && setSelectedHeart(index);
      isEditOpenHandler && isEditOpenHandler(!isEditOpen);
    } else {
      alert("이미 작성된 마음입니다. 다른 위치를 선택해주세요.");
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
            <span>{data ? `-${author?.name}` : ""}</span>
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
  height: 100%;
  ${(props) => (props.isExpend ? "cursor: pointer;" : "")};

  &:hover {
    transform: translateY(-0.5em);
    transition: transform 0.3s ease-in-out;
  }
`;

const HeartPaperPreviewContainer = styled.div<{
  isActive: boolean;
  color?: string;
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

  /* max-height: ${(props) => (props.vertical ? "15em" : "4em")}; */

  transform: rotate(${(props) => props.deg}deg);
  background: ${(props) =>
    props.isActive ? `#${props.color}` : COLORS.ROLLPE_GRAY};
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
