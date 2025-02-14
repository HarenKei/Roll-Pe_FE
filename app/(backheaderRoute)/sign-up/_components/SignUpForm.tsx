"use client";
import styled from "styled-components";
import { StyledInput, Checkbox } from "@/app/_components/ui/input/Input";
import { ButtonSubmit } from "@/app/_components/ui/button/StyledButton";
import { useForm } from "react-hook-form";
import { useEffect, useState, useTransition } from "react";
import { COLORS } from "@/public/styles/colors";
import { signUp } from "@/app/api/auth/sign-up/route";

interface SignUpInputs {
  email: string;
  nickname: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpInputs>();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nicknameRegex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,6}$/;

  const [emailError, setEmailError] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [check, setCheck] = useState<string[]>([]);

  const [isPending, startTransition] = useTransition();

  const emailChangeHandler = (email: string) => {
    if (email && !emailRegex.test(email)) {
      setEmailError("유효한 이메일 주소를 입력해주세요.");
    } else {
      setEmailError("");
    }
  };

  const nicknameChangeHandler = (nickname: string) => {
    if (nickname && !nicknameRegex.test(nickname)) {
      setNicknameError("2-6자의 한글, 영문, 숫자만 입력 가능합니다.");
    } else {
      setNicknameError("");
    }
  };

  const onSubmit = (data: SignUpInputs) => {
    startTransition(async () => {
      try {
        const result = await signUp({
          email: data.email,
          name: data.nickname,
          password: data.password,
        }).then((res) => {
          console.log(res);
          alert(
            "회원가입이 정상적으로 완료되었습니다.\n이메일 인증 후 로그인해주세요."
          );
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  };

  const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      setCheck((prev) => [...prev, value]);
    } else {
      setCheck(check.filter((el) => el !== value));
    }
  };

  useEffect(() => {
    emailChangeHandler(watch("email"));
  }, [watch("email"), emailChangeHandler]);

  useEffect(() => {
    nicknameChangeHandler(watch("nickname"));
  }, [watch("nickname"), nicknameChangeHandler]);

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type={"email"}
          placeholder={"이메일"}
          {...register("email")}
        />
        <p className={"error-message"}>{emailError !== "" && emailError}</p>
        <StyledInput
          type={"text"}
          placeholder={"닉네임(2-6자)"}
          maxLength={6}
          {...register("nickname")}
        />
        <p className={"error-message"}>
          {nicknameError !== "" && nicknameError}
        </p>
        <StyledInput
          type={"password"}
          placeholder={"비밀번호"}
          {...register("password")}
        />
        <StyledInput
          type={"password"}
          placeholder={"비밀번호 확인"}
          onChange={(e) => {
            if (watch("password") !== e.target.value)
              setPasswordError("비밀번호가 일치하지 않습니다");
            else setPasswordError("");
          }}
        />
        <p className={"error-message"}>
          {passwordError !== "" && passwordError}
        </p>
        <div className={"checkbox-container"}>
          <Checkbox
            checkboxId={"age"}
            label={"저는 만14세 이상입니다."}
            isLabelBlack={true}
            onChange={handleChangeCheck}
          />
          <Checkbox
            checkboxId={"terms"}
            label={"서비스 이용약관에 동의합니다."}
            isLabelBlack={true}
            link={"/terms-of-service"}
            onChange={handleChangeCheck}
          />
          <Checkbox
            checkboxId={"privacy"}
            label={"개인정보 수집 및 이용에 동의합니다."}
            isLabelBlack={true}
            link={"/privacy-policy"}
            onChange={handleChangeCheck}
          />
        </div>
        <ButtonSubmit
          text={"회원가입"}
          isDisabled={
            check.length !== 3 ||
            watch("email") === "" ||
            watch("password") === "" ||
            watch("nickname") === ""
          }
        />
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
`;

const Form = styled.form`
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

  & > .error-message {
    width: 100%;
    text-align: left;
    font-family: var(--font-hakgyoansim);
    font-size: 0.875rem;
    color: ${COLORS.ROLLPE_MAIN};
  }
`;

export default SignUpForm;
