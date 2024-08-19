"use client";

import { fetchTodoDetail } from "@/src/services/todo";
import { notFound } from "next/navigation";

const TodoDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const numId = parseInt(id);
  if (isNaN(numId)) {
    return notFound();
  }

  const data = fetchTodoDetail(numId);
  return <div>{id}</div>;
};

export default TodoDetailPage;
