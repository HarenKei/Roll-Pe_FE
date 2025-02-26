"use client";
import styled from "styled-components";
import Image from "next/image";
import Logo from "@/public/images/logos/logo.korean.png";
import { Button } from "@/app/_components/ui/button/StyledButton";

const NonWriterPage: React.FC = () => {
  return (
    <NonWriterPageWrapper>
      <ContentsContainer>
        <div className={"logo-wrapper"}>
          <Image src={Logo} alt={"로고"} layout="responsive" />
        </div>
        <p>아쉽게도 롤페는 초대되지 않은 상태면 작성할 수 없어요.</p>
        <p>이미 초대 받으셨다면 로그인 후 작성해주세요.</p>
        <Button text={"로그인하러가기"} route="/sign-in" />
      </ContentsContainer>
    </NonWriterPageWrapper>
  );
};

const NonWriterPageWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
  height: calc(100% - 20rem);
  font-family: var(--font-hakgyoansim);
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;

  & > .logo-wrapper {
    width: 6.5rem;
    height: 3.25rem;
  }

  & > p {
    max-width: 14.625rem;
    text-align: center;
  }
`;

export default NonWriterPage;
