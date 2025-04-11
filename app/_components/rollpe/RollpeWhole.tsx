"use client";
import styled from "styled-components";
import { Rollpe } from "@/public/utils/types";
import { HeartPaper, HeartPaperPreview } from "./commons/HeartPaper";
import React from "react";

// 마음 별 각도 상수화
const HORIZONTAL_DEG = [
  -2.72, 0, 5.39, 0.22, -1.6, 2.78, 3.1, -1.98, 4.03, -1.98, -0.5, -2.83,
];

const VERTICAL_DEG = [
  0.86, -0.26, 0.15, 0.42, 0.07, 0.86, -0.74, 0.76, 1.45, -0.11, 1.23, -0.66,
];

const HORIZONTAL_MARGIN = [
  "0rem 0rem 0.5rem 0rem",
  "0.5rem 0rem 0rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "0rem 0rem 0rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "0rem 0rem 0rem 0rem",
];

const VERTICAL_MARGIN = [
  "0rem 0rem 0.5rem 0rem",
  "0.5rem 0rem 0rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "1rem 0rem 0rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
];

interface RollpeWholeProps {
  rollpeData: Rollpe;
  isEditOpen: boolean;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedHeart: number;
  setSelectedHeart: React.Dispatch<React.SetStateAction<number>>;
}

const RollpeWhole: React.FC<RollpeWholeProps> = ({
  rollpeData,
  isEditOpen,
  setIsEditOpen,
  selectedHeart,
  setSelectedHeart,
}) => {
  const { theme, code, hearts, title } = rollpeData;

  return (
    <RollpeWholeWrapper>
      <RollpeWholeContainer>
        <HorizontalRow>
          <HeartPaper
            deg={HORIZONTAL_DEG[0]}
            margin={HORIZONTAL_MARGIN[0]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 0)[0]
                : undefined
            }
            index={0}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={HORIZONTAL_DEG[1]}
            margin={HORIZONTAL_MARGIN[1]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 1)[0]
                : undefined
            }
            index={1}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={HORIZONTAL_DEG[2]}
            margin={HORIZONTAL_MARGIN[2]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 2)[0]
                : undefined
            }
            index={2}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={HORIZONTAL_DEG[3]}
            margin={HORIZONTAL_MARGIN[3]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 3)[0]
                : undefined
            }
            index={3}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={HORIZONTAL_DEG[4]}
            margin={HORIZONTAL_MARGIN[4]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 4)[0]
                : undefined
            }
            index={4}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
        </HorizontalRow>
        <HorizontalTitleRow>
          <HeartPaper
            deg={HORIZONTAL_DEG[5]}
            margin={HORIZONTAL_MARGIN[5]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 5)[0]
                : undefined
            }
            index={5}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <div className={"title-wrapper"}>
            <h1>{rollpeData.title}</h1>
          </div>
          <HeartPaper
            deg={HORIZONTAL_DEG[6]}
            margin={HORIZONTAL_MARGIN[6]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 6)[0]
                : undefined
            }
            index={6}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
        </HorizontalTitleRow>
        <HorizontalRow>
          <HeartPaper
            deg={HORIZONTAL_DEG[7]}
            margin={HORIZONTAL_MARGIN[7]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 7)[0]
                : undefined
            }
            index={7}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={HORIZONTAL_DEG[8]}
            margin={HORIZONTAL_MARGIN[8]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 8)[0]
                : undefined
            }
            index={8}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={HORIZONTAL_DEG[9]}
            margin={HORIZONTAL_MARGIN[9]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 9)[0]
                : undefined
            }
            index={9}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={HORIZONTAL_DEG[10]}
            margin={HORIZONTAL_MARGIN[10]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 10)[0]
                : undefined
            }
            index={10}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={HORIZONTAL_DEG[11]}
            margin={HORIZONTAL_MARGIN[11]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 11)[0]
                : undefined
            }
            index={11}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setSelectedHeart={setSelectedHeart}
          />
        </HorizontalRow>
      </RollpeWholeContainer>
    </RollpeWholeWrapper>
  );
};

const RollpeWholeWrapper = styled.div`
  aspect-ratio: 297 / 210;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* width: 100%; */
  height: 100%;
`;

const RollpeWholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
`;

const HorizontalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 12rem;
`;

const HorizontalTitleRow = styled(HorizontalRow)`
  grid-template-columns: 1fr 3fr 1fr;

  & > .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.2rem;
    width: calc(100% - 0.4rem);
    height: 12rem;

    & > h1 {
      text-align: center;
      font-size: 3.25rem;
      font-family: var(--font-jalnan);
      line-height: auto;
    }
  }
`;

export default RollpeWhole;
