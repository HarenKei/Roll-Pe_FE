"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import logo from "@/public/images/logos/logo.korean.png";
import Kakao from "@/public/images/icons/icon_kakao.svg";
import Google from "@/public/images/icons/icon_google.svg";
import Apple from "@/public/images/icons/icon_apple.svg";
import { Button, ButtonSubmit } from "@/app/_components/ui/button/StyledButton";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

interface SignInInputs {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<SignInInputs> = (data) => {
    console.log(data);
  };

  return (
    <SignInContainer>
      <SignInIntro>
        <div className={"logo-wrapper"}>
          <Image
            src={logo}
            alt={"롤페 로고"}
            layout="responsive"
            width={168}
            height={84}
          />
        </div>
        <p>
          다같이 한 마음으로
          <br />
          사랑하는 사람에게 전달해보세요
        </p>
      </SignInIntro>
      <SignInFormWrapper>
        <SignInForm>
          <input
            className={"text-input"}
            placeholder={"이메일"}
            {...register("email")}
          />
          <input
            type={"password"}
            className={"text-input"}
            placeholder={"비밀번호"}
            {...register("password")}
          />
          <div className={"checkbox-wrapper"}>
            <input type={"checkbox"} id={"maintain-login"} />
            <label htmlFor="maintain-login">로그인 유지</label>
          </div>
          <ButtonSubmit text={"로그인"} />
        </SignInForm>
      </SignInFormWrapper>

      <OtherMenuContainer>
        <div className={"account-menu-container"}>
          <Link href={"#"}>
            <p>계정 찾기</p>
          </Link>
          <p>|</p>
          <Link href={"#"}>
            <p>계정 찾기</p>
          </Link>
          <p>|</p>
          <Link href={"#"}>
            <p>회원가입</p>
          </Link>
        </div>

        <div className={"social-login-container"}>
          <button className={"social-item kakao"}>
            <Image src={Kakao} width={20} height={17.5} alt={"카카오 로그인"} />
          </button>

          <button className={"social-item google"}>
            <Image src={Google} width={20} height={20} alt={"Google 로그인"} />
          </button>

          <button className={"social-item apple"}>
            <Image src={Apple} width={20} height={20} alt={"Google 로그인"} />
          </button>
        </div>

        <div className={"account-menu-container service-menu-container"}>
          <Link href={"/terms-of-service"}>
            <p>서비스 이용약관</p>
          </Link>
          <p>|</p>
          <Link href={"/privacy-policy"}>
            <p>개인정보처리방침</p>
          </Link>
        </div>
      </OtherMenuContainer>
    </SignInContainer>
  );
};

const SignInContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 5.25rem;

  width: 100%;

  font-family: var(--font-hakgyoansim);
`;

const SignInIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 6rem;

  & > .logo-wrapper {
    width: 10.5rem;
    height: 5.25rem;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > p {
    text-align: center;
    color: ${COLORS.ROLLPE_SECONDARY};

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

const SignInFormWrapper = styled.div`
  padding: 0 1.25rem;
  width: calc(100% - 2.5rem);
  margin-top: 3.75rem;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;

  & > .text-input {
    padding: 1rem;
    width: calc(100% - 2rem);
    border-radius: 1rem;
    border: 2px solid ${COLORS.ROLLPE_GRAY};
    background: ${COLORS.ROLLPE_PRIMARY};
    font-family: var(--font-hakgyoansim);
    color: ${COLORS.ROLLPE_GRAY};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  & > .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-bottom: 1.5rem;

    input[type="checkbox"] {
      appearance: none;

      box-sizing: border-box;
      background-clip: content-box;
      padding: 0.25em;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 0.25rem;
      border: 2px solid ${COLORS.ROLLPE_GRAY};
      cursor: pointer;
    }

    input[type="checkbox"]:checked {
      background-color: ${COLORS.ROLLPE_MAIN};
    }

    & > label {
      color: ${COLORS.ROLLPE_GRAY};
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const OtherMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${COLORS.ROLLPE_GRAY};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & > .account-menu-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  & > .service-menu-container {
    margin-top: 3.75rem;
    font-family: var(--font-pretendard);
  }

  & > .social-login-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.25rem;

    & > .social-item {
      all: unset;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 3rem;
      height: 3rem;
      border-radius: 50%;

      cursor: pointer;
    }

    & > .kakao {
      background-color: #fee500;
    }

    & > .google {
      border: 1px solid ${COLORS.ROLLPE_SECONDARY};
      background-color: ${COLORS.ROLLPE_PRIMARY};
    }

    & > .apple {
      background-color: ${COLORS.ROLLPE_SECONDARY};
    }
  }
`;

export default SignInPage;
