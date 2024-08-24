export interface TodoListResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface TodoDetailResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type TodoCreateRequest = Omit<TodoListResponse, "id" | "userId">;
