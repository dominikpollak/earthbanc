"use client";

import styled from "styled-components";
import { media } from "../app/constants/breakpoints";

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FlexColCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PageHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

export const PageSubHeading = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  ${media.tablet} {
    font-size: 1.6rem;
  }
`;

export const Row = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap + "px" || "0"};
`;

export const RowBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
