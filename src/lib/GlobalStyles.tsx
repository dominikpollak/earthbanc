"use client";

import { createGlobalStyle } from "styled-components";
import { colors } from "../app/constants/colors";

export const GlobalStyle = createGlobalStyle`

  body,
  html {
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: Inter;
  }

  a {
    text-decoration: none;
    color: ${colors.text};
  }
  `;
