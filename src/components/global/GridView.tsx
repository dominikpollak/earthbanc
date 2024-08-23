import { ReactNode } from "react";
import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  display: grid;
  /* column-gap: 25px;
  row-gap: 205x; */
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const GridView = ({ children }: { children: ReactNode }) => {
  return <Grid>{children}</Grid>;
};

export default GridView;
