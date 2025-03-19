"use client";
import styled from "styled-components";
import { HeartPaperPreview } from "../commons/HeartPaper";
import { Rollpe } from "@/public/utils/types";

export const WhiteRollpe: React.FC = () => {
  return <></>;
};

export const WhiteRollpePriview: React.FC<Rollpe> = (data: Rollpe) => {
  const { title } = data;
  return (
    <PriviewWrapper>
      <PreviewContainer>
        <FirstRow>
          <HeartPaperPreview
            color={"#F228D3"}
            deg={-2.72}
            margin={"0rem 0rem 0rem 0rem"}
          />
          <HeartPaperPreview
            color={"#F2EB28"}
            deg={0}
            margin={"0rem 0rem 0rem 0rem"}
          />
          <HeartPaperPreview
            color={"#F2EB28"}
            deg={5.39}
            margin={"0rem 0rem 0rem 0rem"}
          />
          <HeartPaperPreview
            color={"#28E8F2"}
            deg={0.22}
            margin={"0rem 0rem 0rem 0rem"}
          />
          <HeartPaperPreview
            color={"#F2EB28"}
            deg={-1.6}
            margin={"0em 0em 0.3em 0em"}
          />
        </FirstRow>
        <SecondRow>
          <HeartPaperPreview
            color={"#28E8F2"}
            deg={2.78}
            margin={"0em 0em 0.6em 0em"}
          />
          <div className={"title-wrapper"}>
            <p>{title}</p>
          </div>
          <HeartPaperPreview
            color={"#F228D3"}
            deg={3.1}
            margin={"0em 0em 0.98em 0em"}
          />
        </SecondRow>
        <ThirdRow>
          <HeartPaperPreview
            color={"#F2EB28"}
            deg={-1.98}
            margin={"0rem 0rem 0rem 0rem"}
          />
          <HeartPaperPreview
            color={"#28E8F2"}
            deg={4.03}
            margin={"0.3em 0em 0em 0em"}
          />
          <HeartPaperPreview
            color={"#F2EB28"}
            deg={-1.98}
            margin={"0em 0em 0.6em 0em"}
          />
          <HeartPaperPreview
            color={"#F2EB28"}
            deg={-0.5}
            margin={"0rem 0rem 0rem 0rem"}
          />
          <HeartPaperPreview
            color={"#28E8F2"}
            deg={-2.83}
            margin={"0em 0em 0em 0.28em"}
          />
        </ThirdRow>
      </PreviewContainer>
    </PriviewWrapper>
  );
};

const PriviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  aspect-ratio: 297 / 210;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
`;

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 100%;
  min-height: 4em;
  max-height: 10em;
`;

const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  width: 100%;
  height: 100%;
  min-height: 4em;
  max-height: 10em;

  & > .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0.25rem;
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.5rem);

    & > p {
      text-align: center;
      font-size: 1.25em;
      font-family: var(--font-jalnan);
      line-height: auto;
      word-break: keep-all;

      @media (min-width: 768px) {
        font-size: 3.125em;
      }
    }
  }
`;

const ThirdRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 100%;
  min-height: 4em;
  max-height: 10em;
`;
