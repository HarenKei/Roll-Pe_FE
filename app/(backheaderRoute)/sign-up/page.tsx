"use client";
import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "@/public/styles/colors";
import Logo from "@/public/images/logos/logo.korean.png";

import {
  ButtonSecondary,
  ButtonSubmit,
} from "@/app/_components/ui/button/StyledButton";
import SignUpForm from "./_components/SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <div className={"title-container"}>
          <div className={"logo-wrapper"}>
            <Image
              src={Logo}
              alt={"롤페 로고"}
              layout="responsive"
              width={104}
              height={52}
            />
          </div>
          <h1>회원가입</h1>
        </div>
        <SignUpForm />
      </SignUpContainer>
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.main`
  padding: 7rem 1.25rem;
  width: calc(100% - 2.5rem);
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
  width: 100%;

  & > .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    & > .logo-wrapper {
      width: 6.5rem;
      height: 3.25rem;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    & > h1 {
      color: ${COLORS.ROLLPE_SECONDARY};
      text-align: center;
      font-family: var(--font-pretendard);
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
  }
`;

export default SignUpPage;
