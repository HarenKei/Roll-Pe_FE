"use client";
import {
  Button,
  ButtonSecondary,
} from "@/app/_components/ui/button/StyledButton";
import MainRollpeCard from "@/app/_components/ui/card/main-rollpe-list/MainRollpeCard";
import { COLORS } from "@/public/styles/colors";
import styled from "styled-components";

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <MainPageContainer>
        <DashboardWrapper>
          <div className={"intro"}>
            <h2>김테스트님은</h2>
            <p>15개의 롤페를 만드셨어요.</p>
            <p>15개의 마음을 작성하셨어요.</p>
          </div>

          <div className={"button-wrapper"}>
            <Button text={"초대받은 롤페"} route={"#"} />
            <ButtonSecondary text={"롤페 만들기"} route={"/rollpe/create"} />
          </div>
        </DashboardWrapper>

        <RecentRollpeWrapper>
          <div className={"contents"}>
            <h2>지금 뜨고 있는 롤페</h2>

            <div className={"list-container"}>
              <MainRollpeCard />
              <MainRollpeCard />
              <MainRollpeCard />
              <MainRollpeCard />
              <MainRollpeCard />
              <MainRollpeCard />
            </div>
          </div>
        </RecentRollpeWrapper>
      </MainPageContainer>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.main`
  width: 100%;
  position: relative;
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  font-family: var(--font-hakgyoansim);
`;

const DashboardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  padding: 2.5rem 1.25rem 2.188rem 1.25rem;
  width: calc(100% - 2.5rem);

  & > .intro {
    display: flex;
    flex-direction: column;

    width: 100%;

    & > h2 {
      color: ${COLORS.ROLLPE_SECONDARY};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 0.5rem;
    }

    & > p {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 0.25rem;
    }
  }

  & > .button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;
  }
`;

const RecentRollpeWrapper = styled.section`
  width: 100%;

  background: ${COLORS.ROLLPE_SECTION_BACKGROUND};

  & > .contents {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    padding: 2.5rem 1.25rem;
    width: calc(100% - 2.5rem);

    & > h2 {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    & > .list-container {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default MainPage;
