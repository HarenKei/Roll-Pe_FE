"use client";
import { COLORS } from "@/public/styles/colors";
import styled from "styled-components";
import Image from "next/image";
import DUMMY from "@/public/images/image/image_dummy_thumb.png";

const MyRollpePage: React.FC = () => {
  return (
    <MyRollpeWrapper>
      <MyRollpeContainer>
        <div className={"title-wrapper"}>
          <h1>내 롤페</h1>
        </div>

        <RollpeListWrapper>
          <div className={"count-wrapper"}>
            <em>총 16개</em>
          </div>
          <RollpeListContainer>
            <RollpeListItem>
              <div className={"badge-container"}>
                <span className={"badge-item public"}>공개</span>
                <span className={"badge-item d-day"}>D-365</span>
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
                  <p className={"title"}>김태은은 텐가를 사랑해!</p>
                  <p className={"desc"}>정승민 주최 | 2025.2.1 생성</p>
                </div>
              </div>
            </RollpeListItem>

            <RollpeListItem>
              <div className={"badge-container"}>
                <span className={"badge-item public"}>공개</span>
                <span className={"badge-item d-day"}>D-365</span>
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
                  <p className={"title"}>김태은은 텐가를 사랑해!</p>
                  <p className={"desc"}>정승민 주최 | 2025.2.1 생성</p>
                </div>
              </div>
            </RollpeListItem>

            <RollpeListItem>
              <div className={"badge-container"}>
                <span className={"badge-item private"}>비공개</span>
                <span className={"badge-item d-day"}>D-365</span>
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
                  <p className={"title"}>김태은은 텐가를 사랑해!</p>
                  <p className={"desc"}>정승민 주최 | 2025.2.1 생성</p>
                </div>
              </div>
            </RollpeListItem>

            <RollpeListItem>
              <div className={"badge-container"}>
                <span className={"badge-item public"}>공개</span>
                <span className={"badge-item d-day"}>D-365</span>
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
                  <p className={"title"}>김태은은 텐가를 사랑해!</p>
                  <p className={"desc"}>정승민 주최 | 2025.2.1 생성</p>
                </div>
              </div>
            </RollpeListItem>

            <RollpeListItem>
              <div className={"badge-container"}>
                <span className={"badge-item private"}>비공개</span>
                <span className={"badge-item d-day"}>D-365</span>
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
                  <p className={"title"}>김태은은 텐가를 사랑해!</p>
                  <p className={"desc"}>정승민 주최 | 2025.2.1 생성</p>
                </div>
              </div>
            </RollpeListItem>
          </RollpeListContainer>
        </RollpeListWrapper>
      </MyRollpeContainer>
    </MyRollpeWrapper>
  );
};

const MyRollpeWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
  font-family: var(--font-hakgyoansim);
`;

const MyRollpeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;

  & > .title-wrapper > h1 {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const RollpeListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 100%;

  & > .count-wrapper {
    display: flex;
    align-items: center;
    width: 100%;

    & > em {
      color: ${COLORS.ROLLPE_SECONDARY};
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const RollpeListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

const RollpeListItem = styled.div`
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

export default MyRollpePage;
