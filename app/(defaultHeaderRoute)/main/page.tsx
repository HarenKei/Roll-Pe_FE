import {
  MainPageWrapper,
  MainPageContainer,
  DashboardWrapper,
  RecentRollpeWrapper,
} from "./_components/styles/MainPageStyles";
import {
  Button,
  ButtonSecondary,
} from "@/app/_components/ui/button/StyledButton";
import HotRollpeList from "./_components/list/HotRollpeList";

const Main: React.FC = () => {
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
            <HotRollpeList />
          </div>
        </RecentRollpeWrapper>
      </MainPageContainer>
    </MainPageWrapper>
  );
};

export default Main;
