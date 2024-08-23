"use client";

import styled from "styled-components";

const Container = styled.div`
  background-image: radial-gradient(#d1d1d1 1px, transparent 1px);
  background-size: 20px 20px;
  min-height: calc(100vh - 90px);
  padding: 15px;
`;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
