"use client";

import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export const MainContentSectionWrapper = styled.section`
  padding: 2.5rem 1.25rem;
  width: calc(100% - 2.5rem);

  & > .main-image-wrapper {
    width: 20rem;
    height: 26.75rem;
  }
`;

export const GuideContainer = styled.div`
  padding: 2.5rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: calc(100% - 2.5rem);
`;

export const GuideSectionTitle = styled.h2`
  color: ${COLORS.ROLLPE_SECONDARY};
  font-family: var(--font-hakgyoansim);
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
