import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

interface Props {
  href: string;
}

const GoBack = ({ href }: Props) => {
  return (
    <Wrapper href={href}>
      <ChevronLeft size={22} strokeWidth={3} /> <span>Back</span>
    </Wrapper>
  );
};

export default GoBack;
