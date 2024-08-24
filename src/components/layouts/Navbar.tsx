"use client";

import { colors } from "@/src/app/constants/colors";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: ${colors.primary};
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1.5rem;

  a {
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Link href="/">Earthbanc TODO App</Link>
    </Wrapper>
  );
};

export default Navbar;
