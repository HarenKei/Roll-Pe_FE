"use clinet";
import styled from "styled-components";
import { COLORS } from "../../colors";



export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  background: ${COLORS.ROLLPE_PRIMARY};
  
  
`;

export const MainPageContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 600px;

  box-sizing: border-box;
  padding-top: 200px;
  padding-left: 20px;
  padding-right: 20px;
  
  background: url("images/image/image_background.png") no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 20px;
    width: 100%;
    height: 50px; /* Adjust the height as needed */
    background: linear-gradient(to top, rgba(255, 255, 255, 1), transparent);
  }

  & > .intro {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-family: var(--font-hakgyoansim);
    font-weight: 400;
    line-height: 1.25rem;
    margin-bottom: 60px;
    
  }

  & > img {
    margin-bottom: 20px;
  }
`;