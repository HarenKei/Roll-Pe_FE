"use client";
import styled from "styled-components";
import Image from "next/image";
import Block from "@/public/images/icons/icon_block.svg";
import Report from "@/public/images/icons/icon_siren.svg";
import { COLORS } from "@/public/styles/colors";

const ParticipantsList: React.FC = () => {
  return (
    <ListWrapper>
      <List>
        <li>
          <p>
            김테스트<span>(test1)</span>
          </p>
          <div className={"report-container"}>
            <button className="report-button">
              <Image src={Block} alt={"이 사용자 차단"} layout="responsive" />
            </button>
            <button className="report-button">
              <Image src={Report} alt={"이 사용자 신고"} layout="responsive" />
            </button>
          </div>
        </li>

        <li>
          <p>
            김테스트<span>(test1)</span>
          </p>
          <div className={"report-container"}>
            <button className="report-button">
              <Image src={Block} alt={"이 사용자 차단"} layout="responsive" />
            </button>
            <button className="report-button">
              <Image src={Report} alt={"이 사용자 신고"} layout="responsive" />
            </button>
          </div>
        </li>

        <li>
          <p>
            김테스트<span>(test1)</span>
          </p>
          <div className={"report-container"}>
            <button className="report-button">
              <Image src={Block} alt={"이 사용자 차단"} layout="responsive" />
            </button>
            <button className="report-button">
              <Image src={Report} alt={"이 사용자 신고"} layout="responsive" />
            </button>
          </div>
        </li>

        <li>
          <p>
            김테스트<span>(test1)</span>
          </p>
          <div className={"report-container"}>
            <button className="report-button">
              <Image src={Block} alt={"이 사용자 차단"} layout="responsive" />
            </button>
            <button className="report-button">
              <Image src={Report} alt={"이 사용자 신고"} layout="responsive" />
            </button>
          </div>
        </li>
      </List>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 100%;
  min-height: 28rem;
  border-radius: 1rem;
  border: 2px solid ${COLORS.ROLLPE_SECONDARY};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  width: calc(100% - 2rem);

  & > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0rem;
    width: 100%;
    border-bottom: 1px solid ${COLORS.ROLLPE_GRAY};

    & > p {
      font-size: 1.25rem;
      font-style: normal;
      line-height: normal;
      font-weight: 400;
    }

    & > .report-container {
      display: flex;
      align-items: flex-end;
      gap: 0.75rem;

      & > .report-button {
        all: unset;
        cursor: pointer;
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }

  & > li:last-child {
    border-bottom: none;
  }
`;

export default ParticipantsList;
