"use client";
import Menu from "@/public/images/icons/icon_menu.svg";
import Image from "next/image";
import styled from "styled-components";

const Header: React.FC = () => {
  //TODO: 전역 상태 관리 통해 슬라이드 메뉴 구현.
  return (
    <HeaderWrapper>
      <MenuButton>
        <Image
          src={Menu}
          layout="responsive"
          width={28}
          height={28}
          alt={"메뉴 아이콘"}
        />
      </MenuButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 2.5rem);
  padding: 2rem 1.25rem;
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

export default Header;
