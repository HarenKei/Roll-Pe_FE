"use client";
import styled from "styled-components";
import { HeartPaper } from "../commons/HeartPaper";
import { Rollpe } from "@/public/utils/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RollpeExpend {
  data: Rollpe;
  isExpend: boolean;
  isEditOpen?: boolean;
  isEditOpenHandler?: React.Dispatch<React.SetStateAction<boolean>>;
  selectedHeart?: number;
  setSelectedHeart?: React.Dispatch<React.SetStateAction<number>>;
}


export const WhiteRollpe: React.FC<RollpeExpend> = ({
  data,
  isExpend,
  isEditOpen,
  isEditOpenHandler,
  selectedHeart,
  setSelectedHeart,
}) => {
  const router = useRouter();
  const { code, id, title, ratio, hearts } = data;

  const rollpeClickedHandler = () => {
    router.push(`/rollpe/whole/${code}`);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return ratio === "세로" ? (
    <VerticalWrapper isExpend={isExpend} onClick={rollpeClickedHandler}>
      <VerticalContainer>
        <VerticalRollpeTitleWrapper>
          <p>{title}</p>
        </VerticalRollpeTitleWrapper>
        <VerticalHeartContainer>
          <VerticalHeartRow>
            <HeartPaper
              deg={0.86}
              margin={"0em 0em 0.5em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 0)[0]
                  : undefined
              }
              index={0}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={-0.26}
              margin={"0.5em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 1)[0]
                  : undefined
              }
              index={1}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={0.15}
              margin={"0em 0em 0.5em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 2)[0]
                  : undefined
              }
              index={2}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={0.42}
              margin={"1em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 3)[0]
                  : undefined
              }
              index={3}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
          </VerticalHeartRow>
          <VerticalHeartRow>
            <HeartPaper
              deg={-0.07}
              margin={"0em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 4)[0]
                  : undefined
              }
              index={4}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={0.86}
              margin={"1em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 5)[0]
                  : undefined
              }
              index={5}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={-0.74}
              margin={"0em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 6)[0]
                  : undefined
              }
              index={6}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={0.76}
              margin={"1em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 7)[0]
                  : undefined
              }
              index={7}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
          </VerticalHeartRow>
          <VerticalHeartRow>
            <HeartPaper
              deg={1.45}
              margin={"1em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 8)[0]
                  : undefined
              }
              index={8}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={-0.11}
              margin={"0em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 9)[0]
                  : undefined
              }
              index={9}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={1.23}
              margin={"1em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 10)[0]
                  : undefined
              }
              index={10}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
            <HeartPaper
              deg={-0.66}
              margin={"0em 0em 0em 0em"}
              vertical={true}
              data={
                hearts.count > 0
                  ? hearts.data.filter((heart) => heart.index === 11)[0]
                  : undefined
              }
              index={11}
              isExpend={isExpend}
              isEditOpen={isEditOpen}
              isEditOpenHandler={isEditOpenHandler}
              setSelectedHeart={setSelectedHeart}
            />
          </VerticalHeartRow>
        </VerticalHeartContainer>
      </VerticalContainer>
    </VerticalWrapper>
  ) : (
    <RollpeWrapper isExpend={isExpend} onClick={rollpeClickedHandler}>
      <PreviewContainer>
        <FirstRow>
          <HeartPaper
            deg={-2.72}
            margin={"0rem 0rem 0rem 0rem"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 0)[0]
                : undefined
            }
            index={0}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={0}
            margin={"0rem 0rem 0rem 0rem"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 1)[0]
                : undefined
            }
            index={1}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={5.39}
            margin={"0rem 0rem 0rem 0rem"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 2)[0]
                : undefined
            }
            index={2}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={0.22}
            margin={"0rem 0rem 0rem 0rem"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 3)[0]
                : undefined
            }
            index={3}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={-1.6}
            margin={"0em 0em 0.3em 0em"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 4)[0]
                : undefined
            }
            index={4}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
        </FirstRow>
        <SecondRow>
          <HeartPaper
            deg={2.78}
            margin={"0em 0em 0.6em 0em"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 5)[0]
                : undefined
            }
            index={5}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <div className={"title-wrapper"}>
            <p>{title}</p>
          </div>
          <HeartPaper
            deg={3.1}
            margin={"0em 0em 0.98em 0em"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 6)[0]
                : undefined
            }
            index={6}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
        </SecondRow>
        <ThirdRow>
          <HeartPaper
            deg={-1.98}
            margin={"0rem 0rem 0rem 0rem"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 7)[0]
                : undefined
            }
            index={7}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={4.03}
            margin={"0.3em 0em 0em 0em"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 8)[0]
                : undefined
            }
            index={8}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={-1.98}
            margin={"0em 0em 0.6em 0em"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 9)[0]
                : undefined
            }
            index={9}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={-0.5}
            margin={"0rem 0rem 0rem 0rem"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 10)[0]
                : undefined
            }
            index={10}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
          <HeartPaper
            deg={-2.83}
            margin={"0em 0em 0em 0.28em"}
            vertical={false}
            data={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 11)[0]
                : undefined
            }
            index={11}
            isExpend={isExpend}
            isEditOpen={isEditOpen}
            isEditOpenHandler={isEditOpenHandler}
            setSelectedHeart={setSelectedHeart}
          />
        </ThirdRow>
      </PreviewContainer>
    </RollpeWrapper>
  );
};

const RollpeWrapper = styled.div<{ isExpend: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  aspect-ratio: 297 / 210;
  ${(props) => (props.isExpend ? "cursor: pointer;" : "")}
`;

const VerticalWrapper = styled(RollpeWrapper)`
  height: 100%;
  aspect-ratio: 210 / 297;
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

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em 0.4em;
  width: calc(100% - 0.8em);
  height: calc(100% - 2em);
`;

const VerticalRollpeTitleWrapper = styled.div`
  padding: 1em 2.5em;
  width: calc(100% - 5em);

  @media (min-width: 768px) {
    padding: 2em 5em;
    width: calc(100% - 10em);
  }

  & > p {
    width: 100%;
    font-family: var(--font-jalnan);
    line-height: 130%;
    font-size: 1.5em;
    word-break: break-all;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 3.25em;
    }
  }
`;

const VerticalHeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  padding: 1em 0em;
  width: 100%;
  height: calc(100% - 2em);
`;

const VerticalHeartRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  min-height: 6em;
  max-height: 15em;
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
