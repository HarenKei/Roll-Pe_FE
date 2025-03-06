"use client";
import { useTransition, useEffect, useState } from "react";
import { getHotRollpeList } from "@/app/api/rollpe/route";
import MainRollpeCard from "@/app/_components/ui/card/main-rollpe-list/MainRollpeCard";
import styled from "styled-components";
import { MainRollpeCardProps } from "@/public/utils/types";
import { useSelector } from "react-redux";
import { RootState } from "@/public/redux/store";
import { useRouter } from "next/navigation";

const HotRollpeList: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [hotRollpeList, setHotRollpeList] = useState<MainRollpeCardProps[]>([]);
  const user = useSelector((state: RootState) => state.simpleUser);
  const router = useRouter();

  const notLoginHandler = () => {
    if (user.name) {
      getList();
    }
  };

  const getList = () => {
    startTransition(async () => {
      try {
        const result = await getHotRollpeList().then((res) => {
          setHotRollpeList(res.data);
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  };

  useEffect(() => {
    notLoginHandler();
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
