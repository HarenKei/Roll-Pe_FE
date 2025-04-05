"use client";
import styled from "styled-components";
import { WhiteRollpe } from "@/app/_components/rollpe/white/WhiteRollpe";
import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { getRollpeDetail } from "@/app/api/rollpe/route";
import Loading from "@/app/_components/ui/loading/Loading";
import { Rollpe } from "@/public/utils/types";
import HeartModal from "@/app/_components/ui/modal/HeartEditModal";

const RollpeEnterPage: React.FC = () => {
  const [rollpeCode, setRollpeCode] = useState<string>("");
  const [rollpeDetail, setRollpeDetail] = useState<Rollpe | null>();
  const [selectedHeart, setSelectedHeart] = useState<number>(0);
  const [isHeartModalOpen, setIsHeartModalOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const rollpeId = useParams().rollpeId;

  useEffect(() => {
    if (rollpeId) {
      let pcode = "";
      typeof rollpeId === "string" &&
        rollpeId.split("-").forEach((item: string) => {
          pcode += item;
        });
      console.log(pcode);
      setRollpeCode(pcode);
    }
  }, [rollpeId]);

  useEffect(() => {
    rollpeCode &&
      startTransition(async () => {
        getRollpeDetail(rollpeCode)
          .then((res) => {
            console.log(res.data);
            setRollpeDetail(res.data);
          })
          .catch((err) => {
            if (err) {
              alert("에러 발생");
            }
          });
      });
  }, [rollpeCode]);

  useEffect(() => {
    console.log("selectedHeart", selectedHeart);
  }, [selectedHeart]);

  return isPending || !rollpeDetail ? (
    <Loading />
  ) : (
    <RollpeEnterPageWrapper>
      <WhiteRollpe
        isExpend={true}
        data={rollpeDetail}
        isEditOpen={isHeartModalOpen}
        isEditOpenHandler={setIsHeartModalOpen}
        selectedHeart={selectedHeart}
        setSelectedHeart={setSelectedHeart}
      />
      {isHeartModalOpen && (
        <HeartModal
          paperFk={rollpeDetail.id}
          location={selectedHeart}
          setModalState={setIsHeartModalOpen}
        />
      )}
    </RollpeEnterPageWrapper>
  );
};

const RollpeEnterPageWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export default RollpeEnterPage;
