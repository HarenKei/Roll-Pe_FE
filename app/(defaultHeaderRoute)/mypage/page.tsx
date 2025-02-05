"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Apple from "@/public/images/icons/icon_apple.svg";
import Image from "next/image";
import Link from "next/link";

const MyPage: React.FC = () => {
  return (
    <MyPageWrapper>
      <MyPageContainer>
        <h1>마이페이지</h1>

        <MyPageProfileWrapper>
          <div className={"profile-container"}>
            <div className={"basic-info-wrapper"}>
              <div className={"user-name-container"}>
                <h2 className={"user-name"}>김텐가님</h2>
                <button className={"social-icon-wrapper apple"}>
                  <Image
                    src={Apple}
                    width={10}
                    height={10}
                    alt={"Apple 로그인"}
                  />
                </button>
              </div>
              <p className={"user-id"}>tenga_Kim0601</p>
            </div>

            <div className={"user-rollpe-status-container"}>
              <p>15개의 롤페를 만드셨어요.</p>
              <p>15개의 마음을 작성하셨어요.</p>
            </div>
          </div>
        </MyPageProfileWrapper>

        <MyPageMenuContainer>
          <li>
            <Link href={"#"}>VIP 구매</Link>
          </li>
          <li>
            <Link href={"/mypage/settings/change-password"}>비밀번호 변경</Link>
          </li>
          <li>
            <Link href={"/mypage/my-rollpe"}>내 롤페</Link>
          </li>
          <li>
            <Link href={"/mypage/invited-rollpe"}>초대받은 롤페</Link>
          </li>
          <li>로그아웃</li>
          <li>회원탈퇴</li>
        </MyPageMenuContainer>
      </MyPageContainer>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.main`
  padding-bottom: 10.375rem;
  width: 100%;
  font-family: var(--font-hakgyoansim);
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 1.25rem;

  width: calc(100% - 2.5rem);

  & > h1 {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MyPageProfileWrapper = styled.div`
  display: flex;
  width: 100%;

  & > .profile-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    & > .basic-info-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-top: 3.375rem;

      & > p {
        color: ${COLORS.ROLLPE_SECONDARY};
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      & > .user-name-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & > h2 {
          color: ${COLORS.ROLLPE_SECONDARY};
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }

        & > .social-icon-wrapper {
          all: unset;
          display: flex;
          justify-content: center;
          align-items: center;

          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;

          cursor: pointer;
        }

        & > .apple {
          background-color: ${COLORS.ROLLPE_SECONDARY};
        }
      }
    }
  }

  & > .user-rollpe-status-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const MyPageMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 3rem;
  width: 100%;

  & > li {
    color: ${COLORS.ROLLPE_SECONDARY};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;

    & > a {
      all: unset;
    }
  }

  & > li:last-child {
    color: ${COLORS.ROLLPE_GRAY};
  }
`;

export default MyPage;
