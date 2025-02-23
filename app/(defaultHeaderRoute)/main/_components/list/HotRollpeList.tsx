"use client";
import { useTransition, useEffect, useState } from "react";
import { hotList } from "@/app/api/main/hot-list/route";
import MainRollpeCard from "@/app/_components/ui/card/main-rollpe-list/MainRollpeCard";
import styled from "styled-components";
import { MainRollpeCardProps } from "@/public/utils/types";

const HotRollpeList: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [hotRollpeList, setHotRollpeList] = useState<MainRollpeCardProps[]>([]);
  const getList = () => {
    startTransition(async () => {
      try {
        const result = await hotList().then((res) => {
          setHotRollpeList(res.data);
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <ListContainer>
      {hotRollpeList &&
        hotRollpeList.map((rollpe) => (
          <MainRollpeCard key={rollpe.id} {...rollpe} />
        ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

export default HotRollpeList;
