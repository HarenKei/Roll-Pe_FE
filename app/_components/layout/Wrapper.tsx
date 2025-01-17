import styled from "styled-components";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <WrapperMain>{children}</WrapperMain>;
};

const WrapperMain = styled.main`
  width: 100%;
  min-height: 100svh;
`;

export default Wrapper;
