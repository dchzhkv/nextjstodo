import { AddTodoButton } from "@/components/todo/AddTodoButton";
import { TodosList } from "@/components/todo/TodosList";

export default async function Todos(props: { searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 gap-6">
      <AddTodoButton />

      <TodosList searchParams={searchParams} />
    </section>
  );
}