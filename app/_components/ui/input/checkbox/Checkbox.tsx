"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

interface CheckboxProps {
  checkboxId: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checkboxId, label }) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox id={checkboxId} />
      <label htmlFor={checkboxId}>{label}</label>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-hakgyoansim);
  padding-bottom: 1.5rem;

  & > label {
    color: ${COLORS.ROLLPE_GRAY};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;

  box-sizing: border-box;
  background-clip: content-box;
  padding: 0.25em;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  border: 2px solid ${COLORS.ROLLPE_GRAY};
  cursor: pointer;

  &:checked {
    background-color: ${COLORS.ROLLPE_MAIN};
  }
`;

export default Checkbox;
