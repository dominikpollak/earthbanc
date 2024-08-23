import { TodoListResponse } from "@/src/types/todoTypes";
import { cropString } from "@/src/utils/cropString";
import Link from "next/link";
import styled from "styled-components";

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
  height: 180px;

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

interface Props {
  data: TodoListResponse;
}

const TodoCard = ({ data }: Props) => {
  return (
    <Wrapper href={`todo/${String(data.id)}`}>
      <TodoHeader>{cropString(data.title, 40)}</TodoHeader>
      <p>{cropString(data.body, 60)}</p>
    </Wrapper>
  );
};

export default TodoCard;
