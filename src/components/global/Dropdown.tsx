import { colors } from "@/src/app/constants/colors";
import { Option } from "@/src/types/dropdownTypes";
import React, { ReactNode, useRef, useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  options: Option[];
  label: ReactNode;
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  background-color: transparent;
`;

const DropdownContent = styled.div<{ show: boolean; triggerWidth: number }>`
  display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${colors.secondary};
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  width: fit-content;
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, option: Option) => {
    e.preventDefault();
    setShowDropdown(false);
    option.onClick && option.onClick();
  };

  return (
    <DropdownContainer>
      <DropdownButton
        ref={triggerRef}
        onClick={(e) => {
          e.preventDefault();
          setShowDropdown(!showDropdown);
        }}
      >
        {label}
      </DropdownButton>
      <DropdownContent
        triggerWidth={triggerRef.current?.offsetWidth || 0}
        show={showDropdown}
      >
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={(e) => handleClick(e, option)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
