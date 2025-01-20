"use client";
import styled from "styled-components";
import logo from "@/public/images/logos/logo.korean.png";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/public/styles/colors";

const NotFound: React.FC = () => {
  return (
    <Page404Wrapper>
      <Page404ContentsContainer>
        <div className={"logo-wrapper"}>
          <Image
            src={logo}
            layout="responsive"
            width={168}
            height={84}
            alt={"롤페 로고"}
          />
        </div>
        <p className={"intro"}>페이지를 찾을 수 없어요.</p>
        <Link href={"/"}>홈으로 이동</Link>
      </Page404ContentsContainer>
    </Page404Wrapper>
  );
};

const Page404Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Page404ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  font-family: var(--font-hakgyoansim);
  font-size: 1.25rem;
  line-height: 100%;
  font-style: normal;
  font-weight: 400;

  & > .logo-wrapper {
    width: 10.5rem;
    height: 5.25rem;
    margin-bottom: 1.5rem;
  }

  & > .intro {
    color: ${COLORS.ROLLPE_SECONDARY};
  }

  & > a {
    all: unset;
    cursor: pointer;
    color: ${COLORS.ROLLPE_MAIN};
    margin-top: 0.25rem;
  }
`;

export default NotFound;
