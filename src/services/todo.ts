import { useQuery } from "@tanstack/react-query";
import { TodoListResponse } from "../types/todoTypes";
import { handleFetch } from "../utils/handleFetch";

export const fetchTodoList = async () => {
  const url = "/posts";
  return handleFetch<TodoListResponse>(url);
};

export const useFetchTodoList = () =>
  useQuery({
    queryKey: ["todoList"],
    queryFn: fetchTodoList,
  });

export const fetchTodoDetail = async (id: number) => {
  const url = `/posts/${id}`;
  return handleFetch<TodoListResponse>(url);
};

export const useFetchTodoDetail = (id: number) =>
  useQuery({
    queryKey: ["todoDetail", id],
    queryFn: () => fetchTodoDetail(id),
  });
