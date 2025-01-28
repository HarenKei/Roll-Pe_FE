"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";

const MainRollpeCard: React.FC = () => {
  return (
    <CardWrapper>
      <div className={"card-image"}>
        <Badge>
          <p>D-30</p>
        </Badge>

        <Image
          src={"/images/image/image_dummy_cake.png"}
          width={50}
          height={46}
          alt={""}
        />
      </div>
      <div className={"card-contents"}>
        <h3 className={"card-title"}>롤페 제목</h3>
        <p className={"card-user"}>김테스트1</p>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.button`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 9.188rem;

  border-radius: 1rem;
  overflow: hidden;

  font-family: var(--font-hakgyoansim);

  cursor: pointer;

  & > .card-image {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5.875rem;
    background-color: #ffd6f8;
  }

  & > .card-contents {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    padding: 0.75rem;

    width: calc(100% - 1.5rem);
    /* height: 3.313rem; */

    background-color: ${COLORS.ROLLPE_PRIMARY};

    & > .card-title {
      font-size: 1rem;
      font-weight: 400;
      font-style: normal;
      line-height: normal;
    }

    & > .card-user {
      color: #aaa;
      font-size: 0.75rem;
      font-weight: 400;
      font-style: normal;
      line-height: normal;
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem 0.5rem;

  border-radius: 0.625rem;
  background-color: ${COLORS.ROLLPE_MAIN};

  & > p {
    color: ${COLORS.ROLLPE_PRIMARY};
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default MainRollpeCard;
