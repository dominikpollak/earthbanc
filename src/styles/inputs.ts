import styled from "styled-components";
import { media } from "../app/constants/breakpoints";
import { colors } from "../app/constants/colors";

export const HeaderInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${colors.neutralGrey};
  background-color: white;
  color: ${colors.text};
  border-radius: 4px;
  font-size: 1.2rem;
  box-sizing: border-box;
  ${media.tablet} {
    font-size: 1.5rem;
  }
`;

export const DescriptionInput = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${colors.neutralGrey};
  box-sizing: border-box;
  background-color: white;
  color: ${colors.text};
  border-radius: 4px;
`;
