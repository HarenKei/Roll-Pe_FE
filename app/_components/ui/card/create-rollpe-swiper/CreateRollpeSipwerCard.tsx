"use client";
import Image from "next/image";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

interface CreateRollpeCardProps {
  id: number;
  exam: React.ReactNode;
  isSelected: number;
  setIsSelected: React.Dispatch<React.SetStateAction<number>>;
}

export interface RatioSwiperCardProps extends CreateRollpeCardProps {
  title: string;
}

export interface ThemeSwiperCardProps extends CreateRollpeCardProps {
  title: string;
}

export const RatioSwiperCard: React.FC<RatioSwiperCardProps> = ({
  id,
  exam,
  title,
  isSelected,
  setIsSelected,
}) => {
  const onClickHandler = () => {
    setIsSelected(id);
  };

  return (
    <RatioCardContainer
      isActive={isSelected === id}
      onClick={() => onClickHandler()}
    >
      {exam}
      <p className={"title"}>{title}</p>
    </RatioCardContainer>
  );
};

export const ThemeSwiperCard: React.FC<ThemeSwiperCardProps> = ({
  id,
  exam,
  isSelected,
  title,
  setIsSelected,
}) => {
  const onClickHandler = () => {
    setIsSelected(id);
  };

  return (
    <ThemeCardWrpper>
      <ThemeCardContainer
        isActive={isSelected === id}
        onClick={() => onClickHandler()}
      >
        {exam}
      </ThemeCardContainer>
      <p>{title}</p>
    </ThemeCardWrpper>
  );
};

const RatioCardContainer = styled.button<{ isActive: boolean }>`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem 1.25rem;

  width: 5rem;
  height: 8.25rem;

  color: ${(props) =>
    props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  border: 2px solid
    ${(props) =>
      props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  border-radius: 1rem;

  cursor: pointer;

  & > .title {
    width: 100%;
    text-align: center;
    font-family: var(--font-hakgyoansim);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ThemeCardWrpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > p {
    width: 100%;
    text-align: center;
    font-family: var(--font-hakgyoansim);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ThemeCardContainer = styled(RatioCardContainer)`
  all: unset;
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;

  align-items: center;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  color: ${(props) =>
    props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  overflow: hidden;
`;
