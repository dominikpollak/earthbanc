"use client";

import GridView from "../components/global/GridView";
import LoadingSkeleton from "../components/skeletons/LoadingSkeleton";
import CreateTodoButton from "../components/todo/CreateTodoButton";
import TodoCard from "../components/todo/TodoCard";
import { useFetchTodoList } from "../services/todo";

export default function Home() {
  const query = useFetchTodoList();
  return (
    <main>
      <CreateTodoButton />
      <GridView>
        {query.isLoading && (
          <>
            {Array.from({ length: 30 }).map((_, index) => (
              <LoadingSkeleton
                height="209px"
                width="100%"
                key={index}
                borderRadius="15px"
              />
            ))}
          </>
        )}
        {query.data?.map((todo) => (
          <TodoCard key={todo.id} data={todo} />
        ))}
      </GridView>
    </main>
  );
}
