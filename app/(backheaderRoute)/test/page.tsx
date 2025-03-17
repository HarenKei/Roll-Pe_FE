"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

const TestPage: React.FC = () => {
  return (
    <TestPageWrapper>
      <TestPageContainer></TestPageContainer>
    </TestPageWrapper>
  );
};

const TestPageWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
`;

const TestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export default TestPage;
