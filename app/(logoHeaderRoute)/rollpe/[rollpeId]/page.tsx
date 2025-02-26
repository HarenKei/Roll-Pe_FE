"use client";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import DUMMY from "@/public/images/image/image_templete.png";
import {
  Button,
  ButtonSecondary,
} from "@/app/_components/ui/button/StyledButton";
import { Modal, BottomModal } from "@/app/_components/ui/modal/Modal";
import ParticipantsList from "@/app/_components/ui/modal/modal-contents/participants-list/ParticipantsList";
import RollpeEditForm from "@/app/_components/ui/modal/modal-contents/rollpe-edit/RollpeEditForm";
import ShareRollpe from "@/app/_components/ui/modal/modal-contents/share-rollpe/ShareRollpe";

const RollpeDetailPage: React.FC = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isParticipantsModalOpen, setIsParticipantsModalOpen] =
    useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const rollpeId = useParams().rollpeId;

  const onClickParticipantListOpen = () => {
    setIsParticipantsModalOpen(true);
  };

  const onClickEditOpen = () => {
    setIsEditModalOpen(true);
  };

  const onClickShareOpen = () => {
    setIsShareModalOpen(true);
  };

  return (
    <>
      <RollpeDetailPageWrapper>
        <RollpeDetailPageContainer>
          <div className={"title-wrapper"}>
            <h1>제목영역 롤페 아이디: {rollpeId}</h1>
          </div>

          <div className={"preview-wrapper"}>
            <div className={"preview-image-wrapper"}>
              <Image src={DUMMY} alt={"미리보기 이미지"} layout="responsive" />
            </div>
            <p>롤페를 눌러 마음을 전달하세요!</p>
          </div>

          <div className={"writer-wrapper"}>
            <h4>작성자(3/13)</h4>
            <ul className={"writer-container"}>
              <li>김텐가(TengaSuki)</li>
              <li>김텐가(TengaSuki)</li>
              <li>김텐가(TengaSuki)</li>
            </ul>
          </div>

          <div className={"participant-button-wrapper"}>
            <button
              className={"participant-list-open"}
              onClick={onClickParticipantListOpen}
            >
              참여자 목록 &gt;
            </button>
          </div>

          <div className={"menu-button-container"}>
            <Button
              text={"공유하기"}
              onClickHandler={() => {
                onClickShareOpen();
              }}
            />
            <ButtonSecondary text={"수정하기"} route={""} />
          </div>
        </RollpeDetailPageContainer>
      </RollpeDetailPageWrapper>
      {isParticipantsModalOpen && (
        <Modal
          title={"참여자 목록"}
          children={<ParticipantsList />}
          setModalState={setIsParticipantsModalOpen}
        />
      )}
      {isEditModalOpen && (
        <Modal
          title={"수정하기"}
          children={<RollpeEditForm />}
          setModalState={setIsEditModalOpen}
        />
      )}
      {isShareModalOpen && (
        <BottomModal
          title={"공유하기"}
          children={<ShareRollpe />}
          setModalState={setIsShareModalOpen}
        />
      )}
    </>
  );
};

const RollpeDetailPageWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
  font-family: var(--font-hakgyoansim);
  color: ${COLORS.ROLLPE_SECONDARY};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RollpeDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 3.25rem;

    font-size: 2rem;
  }

  & > .preview-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

    & > .preview-image-wrapper {
      width: 100%;
    }

    & > p {
      font-size: 1rem;
    }
  }

  & > .writer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 2.5rem;
    width: 100%;

    & > h4 {
      font-size: 1.25rem;
    }

    & > .writer-container {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      & > li {
        font-size: 1rem;
      }
    }
  }

  & > .participant-button-wrapper {
    display: flex;
    margin-top: 2.5rem;
    width: 100%;

    & > .participant-list-open {
      all: unset;
      font-size: 1.25rem;
      cursor: pointer;
    }
  }

  & > .menu-button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    width: 100%;

    & > button {
      width: 48%;
    }
  }
`;

export default RollpeDetailPage;
