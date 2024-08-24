import { colors } from "@/src/app/constants/colors";
import { Plus } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const Create = styled(Link)`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  background-color: ${colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  transition: all 0.2s;
  border: 2px solid white;

  svg {
    transition: all 0.2s;
  }

  &:hover {
    scale: 1.1;

    & > svg {
      scale: 1.1;
    }

    animation: none;
  }

  @keyframes pulse {
    0% {
      scale: 1;
      svg {
        scale: 1;
      }
    }
    100% {
      scale: 1.1;
      svg {
        scale: 1.1;
      }
    }
  }

  animation: pulse 1s linear infinite alternate;
`;

const CreateTodoButton = () => {
  return (
    <Create href="/create">
      <Plus size={25} color="white" strokeWidth={4} />
    </Create>
  );
};

export default CreateTodoButton;
