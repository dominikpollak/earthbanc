import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button<{ color: string; size: "sm" | "lg" }>`
  padding: ${(props) => (props.size === "sm" ? "5px 10px" : "10px 20px")};
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: ${(props) => (props.size === "sm" ? "1rem" : "1.2rem")};
  font-weight: bold;

  &:hover {
    filter: brightness(1.1);
    scale: 1.05;
  }
`;

const LinkStyle = styled(Link)<{ color: string; size: "sm" | "lg" }>`
  padding: ${(props) => (props.size === "sm" ? "5px 10px" : "10px 20px")};
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: ${(props) => (props.size === "sm" ? "1rem" : "1.2rem")};
  font-weight: 500;

  &:hover {
    filter: brightness(1.1);
    scale: 1.05;
  }
`;

interface Props {
  color: string;
  label: ReactNode;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "lg";
  onClick?: () => void;
  href?: string;
}

const Button = ({
  type = "button",
  size = "lg",
  color,
  label,
  onClick,
  href,
}: Props) => {
  return (
    <>
      {href ? (
        <LinkStyle color={color} size={size} href={href}>
          {label}
        </LinkStyle>
      ) : (
        <ButtonStyle type={type} onClick={onClick} color={color} size={size}>
          {label}
        </ButtonStyle>
      )}
    </>
  );
};

export default Button;
