import { useQuery } from "@tanstack/react-query";
import { TodoCreateRequest, TodoListResponse } from "../types/todoTypes";
import { handleFetch } from "../utils/handleFetch";

export const fetchTodoList = async () => {
  const url = "/posts";
  return handleFetch<TodoListResponse[]>(url);
};

export const useFetchTodoList = () =>
  useQuery({
    queryKey: ["todoList"],
    queryFn: fetchTodoList,
  });

export const fetchTodoDetail = async (id: number) => {
  const url = `posts/${id}`;
  return handleFetch<TodoListResponse>(url);
};

export const useFetchTodoDetail = (id: number) =>
  useQuery({
    queryKey: ["todoDetail", id],
    queryFn: () => fetchTodoDetail(id),
  });

export const createTodo = async (data: TodoCreateRequest) => {
  const url = "posts";
  return handleFetch<{ id: number }>(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const deleteTodo = async (id: number) => {
  const url = `posts/${id}`;
  return handleFetch<void>(url, {
    method: "DELETE",
  });
};

export const updateTodo = async (id: number, data: TodoCreateRequest) => {
  const url = `posts/${id}`;
  return handleFetch<void>(url, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};
