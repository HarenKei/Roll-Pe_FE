"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  route: string;
}

export const Button: React.FC<ButtonProps> = ({ text, route }) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(route);
  };

  return <StyledButton onClick={onClickHandler}>{text}</StyledButton>;
};

export const ButtonSecondary: React.FC<ButtonProps> = ({ text, route }) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(route);
  };

  return (
    <StyledButtonSecondary onClick={onClickHandler}>
      {text}
    </StyledButtonSecondary>
  );
};

const StyledButton = styled.button`
  padding: 0.75rem;
  width: 100%;
  flex-shrink: 0;

  border-radius: 0.5rem;
  border: 2px solid ${COLORS.ROLLPE_MAIN};
  background-color: ${COLORS.ROLLPE_MAIN};

  color: ${COLORS.ROLLPE_PRIMARY};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  font-family: var(--font-pretendard);
  line-height: 1.5rem;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.ROLLPE_PRIMARY};
    color: ${COLORS.ROLLPE_MAIN};
    transition: all 0.2s ease;
  }
`;

export const StyledButtonSecondary = styled(StyledButton)`
  background-color: ${COLORS.ROLLPE_PRIMARY};
  color: ${COLORS.ROLLPE_MAIN};
`;
