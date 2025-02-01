"use client";
import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "@/public/styles/colors";
import Logo from "@/public/images/logos/logo.korean.png";
import { Checkbox, TextInput } from "@/app/_components/ui/input/Input";
import {
  ButtonSecondary,
  ButtonSubmit,
} from "@/app/_components/ui/button/StyledButton";

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

        <SignUpFormWrapper>
          <SignUpForm>
            <TextInput placeholder={"이메일"} type={"email"} />
            <ButtonSecondary text={"인증번호 발송"} route={""} />
            <TextInput placeholder={"인증번호"} type={"text"} />
            <ButtonSecondary text={"인증번호 확인"} route={""} />
            <TextInput placeholder={"비밀번호"} type={"password"} />
            <TextInput placeholder={"비밀번호 확인"} type={"password"} />
            <div className={"checkbox-container"}>
              <Checkbox
                checkboxId={"age"}
                label={"저는 만14세 이상입니다."}
                isLabelBlack={true}
              />
              <Checkbox
                checkboxId={"terms"}
                label={"서비스 이용약관에 동의합니다."}
                isLabelBlack={true}
                link={"/terms-of-service"}
              />
              <Checkbox
                checkboxId={"privacy"}
                label={"개인정보 수집 및 이용에 동의합니다."}
                isLabelBlack={true}
                link={"/privacy-policy"}
              />
            </div>
            <ButtonSubmit text={"가입"} isDisabled={true} />
          </SignUpForm>
        </SignUpFormWrapper>
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

const SignUpFormWrapper = styled.div`
  width: 100%;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > .checkbox-container {
    display: flex;
    flex-direction: column;
    margin: 2rem 0rem 1.25rem 0rem;
    width: 100%;
  }
`;

export default SignUpPage;
