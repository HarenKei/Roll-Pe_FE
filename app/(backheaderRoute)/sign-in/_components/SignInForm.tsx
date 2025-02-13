"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "@/app/api/auth/sign-in/route";
import { ButtonSubmit } from "@/app/_components/ui/button/StyledButton";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

interface SignInInputs {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInInputs>();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    startTransition(async () => {
      try {
        const result = await signIn(data.email, data.password).then((res) => {
          router.push("/main");
        });
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type={"email"}
          {...register("email")}
          placeholder={"이메일"}
        />
        <StyledInput
          type={"password"}
          {...register("password")}
          placeholder={"비밀번호"}
        />
        <ButtonSubmit text={"로그인"} />
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  padding: 0 1.25rem;
  width: calc(100% - 2.5rem);
  margin-top: 3.75rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;
`;

const StyledInput = styled.input`
  padding: 1rem;
  width: calc(100% - 2rem);
  border-radius: 1rem;
  border: 2px solid ${COLORS.ROLLPE_GRAY};
  background: ${COLORS.ROLLPE_PRIMARY};
  font-family: var(--font-hakgyoansim);
  color: ${COLORS.ROLLPE_SECONDARY};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  &::placeholder {
    color: ${COLORS.ROLLPE_GRAY};
  }
  &:focus {
    border: 2px solid ${COLORS.ROLLPE_SECONDARY};
  }
`;

export default SignInForm;
