"use client";

import GoBack from "@/src/components/global/GoBack";
import { useFetchTodoDetail } from "@/src/services/todo";
import { notFound } from "next/navigation";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const TodoDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const numId = parseInt(id);
  const query = useFetchTodoDetail(numId);

  if (isNaN(numId) || query.error) {
    return notFound();
  }

  return (
    <div>
      <GoBack href="/" />
      <Header>{query.data?.title}</Header>
    </div>
  );
};

export default TodoDetailPage;
