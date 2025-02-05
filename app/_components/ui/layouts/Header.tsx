"use client";
import Menu from "@/public/images/icons/icon_menu.svg";
import Back from "@/public/images/icons/icon_arrow_left.svg";
import logo from "@/public/images/logos/logo.korean.png";
import Image from "next/image";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/public/redux/store";
import { RootState } from "@/public/redux/store";
import { setSlide } from "@/public/redux/redux";
import { useRouter } from "next/navigation";

export const HeaderDefault: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state.slideMenu.isOpen);

  const onClickMenuHandler = () => {
    dispatch(setSlide(!isMenuOpen));
  };

  return (
    <>
      <HeaderWrapper left={false}>
        <MenuButton onClick={() => onClickMenuHandler()}>
          <Image
            src={Menu}
            layout="responsive"
            width={28}
            height={28}
            alt={"메뉴 아이콘"}
          />
        </MenuButton>
      </HeaderWrapper>
    </>
  );
};

export const HeaderBack: React.FC = () => {
  const router = useRouter();

  const onClickBackHandler = () => {
    router.back();
  };

  return (
    <HeaderWrapper left={true}>
      <BackButton onClick={() => onClickBackHandler()}>
        <Image
          src={Back}
          layout="responsive"
          width={28}
          height={28}
          alt={"메뉴 아이콘"}
        />
      </BackButton>
    </HeaderWrapper>
  );
};

export const HeaderMenuLogo: React.FC = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.slideMenu.isOpen);

  const onClickMenuHandler = () => {
    dispatch(setSlide(!isMenuOpen));
  };

  const onClickBackHandler = () => {
    router.back();
  };

  const onClickLogoHandler = () => {
    router.push("/main");
  };

  return (
    <LogoHeaderWRapper left={true}>
      <BackButton onClick={() => onClickBackHandler()}>
        <Image
          src={Back}
          layout="responsive"
          width={28}
          height={28}
          alt={"메뉴 아이콘"}
        />
      </BackButton>
      <LogoButton onClick={() => onClickLogoHandler()}>
        <Image
          src={logo}
          layout="responsive"
          width={48}
          height={24}
          alt={"홈으로"}
        />
      </LogoButton>
      <MenuButton onClick={() => onClickMenuHandler()}>
        <Image
          src={Menu}
          layout="responsive"
          width={28}
          height={28}
          alt={"메뉴 아이콘"}
        />
      </MenuButton>
    </LogoHeaderWRapper>
  );
};

export const HeaderLogo = () => {
  const router = useRouter();

  const onClickBackHandler = () => {
    router.back();
  };

  const onClickLogoHandler = () => {
    router.push("/main");
  };
  return (
    <LogoHeaderWRapper left={true}>
      <BackButton onClick={() => onClickBackHandler()}>
        <Image
          src={Back}
          layout="responsive"
          width={28}
          height={28}
          alt={"메뉴 아이콘"}
        />
      </BackButton>
      <LogoButton onClick={() => onClickLogoHandler()}>
        <Image
          src={logo}
          layout="responsive"
          width={48}
          height={24}
          alt={"홈으로"}
        />
      </LogoButton>
    </LogoHeaderWRapper>
  );
};

const HeaderWrapper = styled.header<{ left: boolean }>`
  position: absolute;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};
  width: calc(100% - 2.5rem);
  padding: 1rem 1.25rem;
  background: transparent;
`;

const LogoHeaderWRapper = styled(HeaderWrapper)`
  align-items: center;
  justify-content: space-between;
`;

const MenuButton = styled.button`
  all: unset;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const BackButton = styled(MenuButton)`
  width: 0.75rem;
  height: 1.25rem;
`;

const LogoButton = styled(MenuButton)`
  width: 3rem;
  height: 1.5rem;
`;
