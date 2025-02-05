"use client";
import styled from "styled-components";
import { ButtonSubmit } from "@/app/_components/ui/button/StyledButton";
import { COLORS } from "@/public/styles/colors";
import { TextInput } from "@/app/_components/ui/input/Input";

const ChangePasswordPage: React.FC = () => {
  return (
    <ChangePasswordPageWrapper>
      <ChangePasswordContainer>
        <h1>비밀번호 변경</h1>
        <PasswordForm>
          <TextInput placeholder={"비밀번호"} type={"password"} />
          <TextInput placeholder={"비밀번호 확인"} type={"password"} />
          <ButtonSubmit text={"변경하기"} />
        </PasswordForm>
      </ChangePasswordContainer>
    </ChangePasswordPageWrapper>
  );
};

const ChangePasswordPageWrapper = styled.main`
  padding: 5rem 1.25rem 19.6rem 1.25rem;
  width: calc(100% - 2.5rem);
  font-family: var(--font-hakgyoansim);
`;

const ChangePasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > h1 {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3.25rem;
  width: 100%;

  & > input[type="submit"] {
    margin-top: 2rem;
  }
`;
export default ChangePasswordPage;
