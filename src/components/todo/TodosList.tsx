import { getTodos } from "@/app/todos/actions/getTodos";
import { TodosTable } from "./TodosTable";

export async function TodosList({ searchParams }: { searchParams: any }) {
  const { data: todos } = await getTodos(searchParams);

  return (
    <div className="grid gap-4 w-full max-w-screen-lg">
      <TodosTable data={todos} />
    </div>
  );
}