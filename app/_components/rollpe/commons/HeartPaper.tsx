"use client";
import styled from "styled-components";
import { Heart } from "@/public/utils/types";
import { COLORS } from "@/public/styles/colors";

interface HeartPaperProps {
  color: string;
  deg: number;
  margin: React.CSSProperties["margin"];
}

export const HeartPaper: React.FC = () => {
  return <></>;
};

export const HeartPaperPreview: React.FC<HeartPaperProps> = ({
  color,
  deg,
  margin,
}) => {
  return (
    <HeartPaperPreviewWrapper>
      <HeartPaperPreviewContainer
        color={color}
        deg={deg}
        style={{ margin: margin }}
      >
        <ContentsWrapper>
          <p>김테스트야 생일 축하해, 우리 곁에 와줘서 고마워!!!!</p>
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
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 90%;
  min-width: 3.5em;
  min-height: 4em;
  max-height: 10em;

  transform: rotate(${(props) => props.deg}deg);
  background: ${(props) => props.color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: var(--font-hakgyoanshim);
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: calc(100% - 2em);
  height: calc(100% - 2em);

  & > p {
    font-family: var(--font-nanumpen);
    font-size: 1.25em;
    color: ${COLORS.ROLLPE_SECONDARY};
    line-height: auto;
    text-align: center;
    word-break: keep-all;
  }
`;
