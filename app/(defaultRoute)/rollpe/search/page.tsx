"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { SearchInput, TextInput } from "@/app/_components/ui/input/Input";

const RollpeSearchPage: React.FC = () => {
  return (
    <RollpeSearchWrapper>
      <RollpeSearchContainer>
        <div className={"search-wrapper"}>
          <h1>진행 중인 롤페를 검색해요.</h1>
          <SearchInput />
        </div>
      </RollpeSearchContainer>
    </RollpeSearchWrapper>
  );
};

const RollpeSearchWrapper = styled.main`
  padding: 2.5rem 1.25rem;
  width: calc(100% - 2.5rem);
  font-family: var(--font-hakgyoansim);
`;

const RollpeSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.75rem;
  width: 100%;

  & > .search-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    width: 100%;

    & > h1 {
      color: ${COLORS.ROLLPE_SECONDARY};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export default RollpeSearchPage;
