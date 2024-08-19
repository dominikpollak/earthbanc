"use client";

import { useFetchTodoList } from "../services/todo";

export default function Home() {
  const query = useFetchTodoList();
  return <main>lol</main>;
}
