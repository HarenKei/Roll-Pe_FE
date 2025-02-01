"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { SearchInput } from "@/app/_components/ui/input/Input";
import { RollpeListItemProps } from "@/public/utils/types";
import RollpeList from "@/app/_components/ui/list/RollpeList";

const DUMMY_ROLLPE_LIST: RollpeListItemProps[] = [
  {
    rollpeId: "r01",
    rollpeTitle: "롤페 제목",
    rollpeOwner: "김테스트1",
    createdAt: "2025.2.1",
    dDay: 365,
    isPublic: true,
    thumbnail: "",
  },
  {
    rollpeId: "r02",
    rollpeTitle: "롤페 제목",
    rollpeOwner: "김테스트1",
    createdAt: "2025.2.1",
    dDay: 365,
    isPublic: false,
    thumbnail: "",
  },
  {
    rollpeId: "r03",
    rollpeTitle: "롤페 제목",
    rollpeOwner: "김테스트1",
    createdAt: "2025.2.1",
    dDay: 365,
    isPublic: false,
    thumbnail: "",
  },
  {
    rollpeId: "r04",
    rollpeTitle: "롤페 제목",
    rollpeOwner: "김테스트1",
    createdAt: "2025.2.1",
    dDay: 365,
    isPublic: true,
    thumbnail: "",
  },
  {
    rollpeId: "r05",
    rollpeTitle: "롤페 제목",
    rollpeOwner: "김테스트1",
    createdAt: "2025.2.1",
    dDay: 365,
    isPublic: false,
    thumbnail: "",
  },
];

const RollpeSearchPage: React.FC = () => {
  return (
    <RollpeSearchWrapper>
      <RollpeSearchContainer>
        <div className={"search-wrapper"}>
          <h1>진행 중인 롤페를 검색해요.</h1>
          <SearchInput />
        </div>
        <RollpeList
          rollpeList={DUMMY_ROLLPE_LIST}
          resultText={"의 검색 결과"}
        />
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
