"use client";
import { useEffect, useState, useTransition } from "react";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { SearchInput } from "@/app/_components/ui/input/Input";
import { RollpeListItemProps } from "@/public/utils/types";
import { RollpeSearchList } from "@/app/_components/ui/list/RollpeList";
import { RollpeSearchListData } from "@/public/utils/types";
import { getSearchRollpeList } from "@/app/api/rollpe/route";
import { set } from "react-hook-form";

//TODO: 롤페 검색 구현 25.03.12
const RollpeSearchPage: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [searchList, setSearchList] = useState<RollpeSearchListData>();
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    searchText !== "" &&
      startTransition(async () => {
        await getSearchRollpeList(searchText)
          .then((res) => {
            setSearchList(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, [searchText]);

  useEffect(() => {
    console.log(searchList);
  }, [searchList]);

  return (
    <RollpeSearchWrapper>
      <RollpeSearchContainer>
        <div className={"search-wrapper"}>
          <h1>진행 중인 롤페를 검색해요.</h1>
          <SearchInput setSearchText={setSearchText} />
        </div>
        <RollpeSearchList
          rollpeList={searchList?.results}
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
