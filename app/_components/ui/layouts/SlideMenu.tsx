"use client";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSlide } from "@/public/redux/redux";
import { AppDispatch, RootState } from "@/public/redux/store";
import { COLORS } from "@/public/styles/colors";

const SlideMenu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.slideMenu.isOpen);

  const onClickCloseHandler = () => {
    dispatch(setSlide(!isMenuOpen));
  };

  return (
    isMenuOpen && (
      <SlideMenuWrapper>
        <SlideMenuContainer>
          <button onClick={onClickCloseHandler}>test</button>
        </SlideMenuContainer>
      </SlideMenuWrapper>
    )
  );
};

const SlideMenuWrapper = styled.div`
  position: absolute;
  z-index: 4;
  top: 0;

  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const SlideMenuContainer = styled.div`
  position: relative;
  padding: 2rem 1.25rem 1.25rem 2.5rem;
  width: calc(80% - 2.5rem);
  height: calc(100% - 3.3rem);
  background: ${COLORS.ROLLPE_PRIMARY};
  border-radius: 1rem 0rem 0rem 1rem;

  & > button {
    position: absolute;
    right: 20;
    top: 20;
  }
`;

export default SlideMenu;
