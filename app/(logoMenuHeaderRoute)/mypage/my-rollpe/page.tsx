"use client";
import { COLORS } from "@/public/styles/colors";
import styled from "styled-components";
import { RollpeListItemProps } from "@/public/utils/types";
import { RollpeList } from "@/app/_components/ui/list/RollpeList";
import { Rollpe } from "@/public/utils/types";
import { useEffect, useState, useTransition } from "react";
import { getUserRollpeList } from "@/app/api/rollpe/route";
import Loading from "@/app/_components/ui/loading/Loading";

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

const MyRollpePage: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [myRollpeList, setMyRollpeList] = useState<Rollpe[]>();

  const getMyRollpeList = () => {
    startTransition(async () => {
      await getUserRollpeList("my")
        .then((res) => {
          // console.log(res);
          setMyRollpeList(res);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  useEffect(() => {
    getMyRollpeList();
  }, []);

  useEffect(() => {
    console.log(myRollpeList);
  }, [myRollpeList]);

  return isPending ? (
    <Loading />
  ) : (
    <MyRollpeWrapper>
      <MyRollpeContainer>
        <div className={"title-wrapper"}>
          <h1>내 롤페</h1>
        </div>
        {myRollpeList && <RollpeList list={myRollpeList} resultText={""} />}
      </MyRollpeContainer>
    </MyRollpeWrapper>
  );
};

const MyRollpeWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
  height: 100%;
  font-family: var(--font-hakgyoansim);
`;

const MyRollpeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 100%;

  & > .title-wrapper > h1 {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default MyRollpePage;
