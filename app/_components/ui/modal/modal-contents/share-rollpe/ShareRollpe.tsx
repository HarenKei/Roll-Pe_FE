"use client";
import styled from "styled-components";

const ShareRollpe: React.FC = () => {
  return (
    <ShareRollpeWrapper>
      <h3 className={"modal-title"}>공유하기</h3>
      <p className={"rollpe-code"}>codea-codeb-codec-codee</p>
      <div className={"share-button-wrapper"}></div>
    </ShareRollpeWrapper>
  );
};

const ShareRollpeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > .modal-title {
    font-size: 1rem;
  }

  & > .rollpe-code {
    font-size: 0.75rem;
  }

  & > .share-button-wrapper {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
`;

export default ShareRollpe;
