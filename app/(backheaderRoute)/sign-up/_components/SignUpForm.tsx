"use client";
import styled from "styled-components";
import { StyledInput, Checkbox } from "@/app/_components/ui/input/Input";
import { ButtonSubmit } from "@/app/_components/ui/button/StyledButton";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface SignUpInputs {
  email: string;
  nickname: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [check, setCheck] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();

  const onSubmit = (data: SignUpInputs) => {
    console.log(data);
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
    console.log(check);
  }, [check]);

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type={"email"}
          placeholder={"이메일"}
          {...register("email")}
        />
        <StyledInput
          type={"text"}
          placeholder={"닉네임(2-6자)"}
          maxLength={6}
          {...register("nickname")}
        />
        <StyledInput
          type={"password"}
          placeholder={"비밀번호"}
          {...register("password")}
        />
        <StyledInput type={"password"} placeholder={"비밀번호 확인"} />
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
        <ButtonSubmit text={"회원가입"} isDisabled={check.length !== 3} />
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
`;

export default SignUpForm;
