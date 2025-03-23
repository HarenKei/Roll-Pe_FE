"use client";
import styled from "styled-components";
import { Heart } from "@/public/utils/types";
import { COLORS } from "@/public/styles/colors";
import { useState } from "react";

interface HeartPaperProps {
  color: string;
  deg: number;
  margin: React.CSSProperties["margin"];
  vertical: boolean;
}

export const HeartPaper: React.FC = () => {
  return <></>;
};

export const HeartPaperPreview: React.FC<HeartPaperProps> = ({
  color,
  deg,
  margin,
  vertical,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(); //롤페 크게보기용 상태

  return (
    <HeartPaperPreviewWrapper>
      <HeartPaperPreviewContainer
        color={color}
        deg={deg}
        style={{ margin: margin }}
        vertical={vertical}
      >
        <ContentsWrapper>
          <p className={"content"}>
            김테스트야 생일 축하해, 우리 곁에 와줘서 고마워!!!!
            <span>-태은</span>
          </p>
        </ContentsWrapper>
      </HeartPaperPreviewContainer>
    </HeartPaperPreviewWrapper>
  );
};

const HeartPaperPreviewWrapper = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const HeartPaperPreviewContainer = styled.div<{
  color: string;
  deg: number;
  vertical: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 100%;
  min-width: 3.5em;

  @media (min-width: 768px) {
    max-height: 15em;
  }

  max-height: ${(props) => (props.vertical ? "12em" : "4em")};

  transform: rotate(${(props) => props.deg}deg);
  background: ${(props) => props.color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: var(--font-hakgyoanshim);
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
