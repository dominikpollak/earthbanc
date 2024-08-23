"use client";

import { colors } from "@/src/app/constants/colors";
import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: ${colors.primary};
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1.5rem;
`;

const Navbar = () => {
  return <Wrapper>Earthbanc TODO App</Wrapper>;
};

export default Navbar;
