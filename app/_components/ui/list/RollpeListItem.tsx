"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import DUMMY from "@/public/images/image/image_dummy_thumb.png";
import { RollpeListItemProps } from "@/public/utils/types";

const RollpeListItem: React.FC<RollpeListItemProps> = ({
  rollpeId,
  rollpeTitle,
  rollpeOwner,
  createdAt,
  dDay,
  isPublic,
  thumbnail,
}) => {
  return (
    <RollpeListItemWrapper>
      <div className={"badge-container"}>
        <span className={`badge-item ${isPublic ? "public" : "private"}`}>
          {isPublic ? "공개" : "비공개"}
        </span>
        <span className={"badge-item d-day"}>D-{dDay}</span>
      </div>
      <div className={"info-wrapper"}>
        <div className={"thumb-wrapper"}>
          <Image
            src={DUMMY}
            alt={"썸네일"}
            layout="responsive"
            width={48}
            height={48}
          />
        </div>
        <div className={"title-wrappper"}>
          <p className={"title"}>{rollpeTitle}</p>
          <p className={"desc"}>
            {rollpeOwner} 주최 | {createdAt} 생성
          </p>
        </div>
      </div>
    </RollpeListItemWrapper>
  );
};

const RollpeListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0rem;
  gap: 0.625rem;
  width: 100%;

  border-bottom: 2px solid ${COLORS.ROLLPE_GRAY};

  & > .badge-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    & > .badge-item {
      padding: 0.25rem 0.5rem;
      border-radius: 0.625rem;

      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    & > .public {
      border: 1px solid ${COLORS.ROLLPE_MAIN};
      background-color: ${COLORS.ROLLPE_PRIMARY};
      color: ${COLORS.ROLLPE_MAIN};
    }

    & > .private {
      border: 1px solid ${COLORS.ROLLPE_GRAY};
      background-color: ${COLORS.ROLLPE_PRIMARY};
      color: ${COLORS.ROLLPE_GRAY};
    }

    & > .d-day {
      border: 1px solid ${COLORS.ROLLPE_MAIN};
      background-color: ${COLORS.ROLLPE_MAIN};
      color: ${COLORS.ROLLPE_PRIMARY};
    }
  }

  & > .info-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > .thumb-wrapper {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    & > .title-wrappper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      & > .title {
        color: ${COLORS.ROLLPE_SECONDARY};
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      & > .desc {
        color: ${COLORS.ROLLPE_GRAY};
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;

export default RollpeListItem;
