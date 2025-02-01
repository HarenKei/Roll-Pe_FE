"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import SearchIcon from "@/public/images/icons/icon_search.svg";
import Link from "next/link";

interface TextInputProps {
  type: string;
  placeholder: string;
}

interface CheckboxProps {
  checkboxId: string;
  label: string;
  link?: string;
  isLabelBlack?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({ type, placeholder }) => {
  return (
    <>
      <StyledInput type={type} placeholder={placeholder} />
    </>
  );
};

export const SearchInput: React.FC = () => {
  const onClikcHandler = () => {
    alert("검색 기능 구현을 해야된다!");
  };
  return (
    <SearchInputWrapper>
      <input type={"text"} placeholder={"검색어를 입력하세요."} />
      <button onClick={() => onClikcHandler()}>
        <Image
          src={SearchIcon}
          alt={"검색"}
          layout="responsive"
          width={23}
          height={21}
        />
      </button>
    </SearchInputWrapper>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checkboxId,
  label,
  link,
  isLabelBlack,
}) => {
  return (
    <CheckboxWrapper isLabelBlack={isLabelBlack}>
      <StyledCheckbox id={checkboxId} />
      <label htmlFor={checkboxId}>{label}</label>
      {link && <Link href={link}>보기</Link>}
    </CheckboxWrapper>
  );
};

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem 0rem 1rem;
  width: calc(100% - 2rem);

  border-radius: 1rem;
  border: 2px solid ${COLORS.ROLLPE_SECONDARY};

  & > input {
    all: unset;
    width: calc(100% - 3rem);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: ${COLORS.ROLLPE_GRAY};
    }
  }

  & > button {
    all: unset;
    width: 1.375rem;
    height: 1.375rem;
    cursor: pointer;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
`;

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

const CheckboxWrapper = styled.div<{ isLabelBlack?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-hakgyoansim);

  & > label {
    color: ${(props) =>
      props.isLabelBlack && props.isLabelBlack
        ? COLORS.ROLLPE_SECONDARY
        : COLORS.ROLLPE_GRAY};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & > a {
    all: unset;
    margin-left: auto;
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
