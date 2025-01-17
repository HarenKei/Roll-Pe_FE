"use client";

import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export const MainContentSectionWrapper = styled.section`
  padding: 40px 20px;
  width: calc(100% - 40px);
  max-height: 40rem;
`;

export const GuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: calc(100% - 40px);
`;

export const GuideSectionTitle = styled.h2`
  color: ${COLORS.ROLLPE_SECONDARY};
  font-family: var(--font-hakgyoansim);
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
