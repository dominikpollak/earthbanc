"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body,
  html {
    margin: 0;
    padding: 0;
    background-color: var(--background);
    color: var(--text);
    font-family: Inter;
  }

  a {
    text-decoration: none;
    color: var(--text);
  }
  `;
