import { media } from "@/src/app/constants/breakpoints";
import { colors } from "@/src/app/constants/colors";
import { X } from "lucide-react";
import React from "react";
import styled from "styled-components";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  hideClose?: boolean;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
`;

const ModalContainer = styled.div<{
  minwidth?: string;
  minheight?: string;
  maxwidth?: string;
  maxheight?: string;
}>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: ${colors.background};
  padding: 1rem;
  padding-top: 2.2rem;
  max-width: ${(props) => props.maxwidth || "auto"};
  max-height: ${(props) => props.maxheight || "auto"};
  min-width: ${(props) => props.minwidth || "auto"};
  min-height: ${(props) => props.minheight || "auto"};
  min-width: 320px;

  ${media.tablet} {
    padding: 1.25rem;
    padding-top: 2.2rem;
  }
`;

const CloseIcon = styled(X)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;

  ${media.tablet} {
    right: 1.25rem;
    top: 1.25rem;
  }
`;

const Modal = ({
  onClose,
  children,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  hideClose,
}: Props) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        minwidth={minWidth}
        minheight={minHeight}
        maxwidth={maxWidth}
        maxheight={maxHeight}
      >
        {!hideClose && <CloseIcon onClick={onClose} />}
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
