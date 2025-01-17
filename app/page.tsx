"use client";
import * as S from "@/public/styles/styled-components/main/main.style";
import Image from "next/image";
import { StyledButton } from "./_components/ui/button/StyledButton";

const Home: React.FC = () => {
  return (
    <S.MainPageContainer>
      <S.MainPageContentsContainer>
        <Image
          src={"/images/logos/logo.korean.svg"}
          alt={"롤페 로고"}
          width={168}
          height={84}
        />
        <p className={"intro"}>
          다같이 한 마음으로
          <br />
          사랑하는 사람에게 전달해보세요
        </p>
        <StyledButton>롤페 시작하기</StyledButton>
      </S.MainPageContentsContainer>
    </S.MainPageContainer>
  );
};

export default Home;
