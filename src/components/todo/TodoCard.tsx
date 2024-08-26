import { Option } from "@/src/types/dropdownTypes";
import { TodoListResponse } from "@/src/types/todoTypes";
import { cropString } from "@/src/utils/cropString";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import Dropdown from "../global/Dropdown";
import DeleteTodoModal from "./DeleteTodoModal";

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #121212;
  padding: 10px;
  background-color: #f6fdfd;
  border-radius: 15px;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s;
  cursor: pointer;
  height: 200px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 7px 0px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.2s;
  }
`;

const TodoHeader = styled.h3`
  font-size: 1.3rem;
  line-height: 1.1;
  margin-bottom: 10px;
  margin-top: 0;
  height: 70px;
`;

const DropdownWrapper = styled.div`
  margin-top: auto;
  margin-left: auto;
  width: 30px;
`;

interface Props {
  data: TodoListResponse;
}

const TodoCard = ({ data }: Props) => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const options: Option[] = [
    {
      label: <Pencil size={18} color="white" />,
      onClick: () => {
        router.push(`/todo/${String(data.id)}/update`);
      },
    },
    {
      label: <Trash2 size={18} color="white" />,
      onClick: () => {
        setShowDeleteModal(true);
      },
    },
  ];
  return (
    <>
      {showDeleteModal && (
        <DeleteTodoModal
          onClose={() => setShowDeleteModal(false)}
          id={data.id}
        />
      )}
      <Wrapper href={`todo/${String(data.id)}`}>
        <TodoHeader>{cropString(data.title, 40)}</TodoHeader>
        <p>{cropString(data.body, 60)}</p>
        <DropdownWrapper>
          <Dropdown options={options} label={<Ellipsis color="black" />} />
        </DropdownWrapper>
      </Wrapper>
    </>
  );
};

export default TodoCard;
