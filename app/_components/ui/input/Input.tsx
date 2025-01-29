"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

interface TextInputProps {
  type: string;
  placeholder: string;
}

interface CheckboxProps {
  checkboxId: string;
  label: string;
}

export const TextInput: React.FC<TextInputProps> = ({ type, placeholder }) => {
  return (
    <>
      <StyledInput type={type} placeholder={placeholder} />
    </>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({ checkboxId, label }) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox id={checkboxId} />
      <label htmlFor={checkboxId}>{label}</label>
    </CheckboxWrapper>
  );
};

const StyledInput = styled.input`
  padding: 1rem;
  width: calc(100% - 2rem);
  border-radius: 1rem;
  border: 2px solid ${COLORS.ROLLPE_GRAY};
  background: ${COLORS.ROLLPE_PRIMARY};
  font-family: var(--font-hakgyoansim);
  color: ${COLORS.ROLLPE_GRAY};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

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
