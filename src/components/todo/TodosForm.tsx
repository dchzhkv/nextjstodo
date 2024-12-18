"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Priority } from "@/constants/todos";
import addTodo from "@/app/todos/actions/addTodo";
import { Todo } from "@/types/todos";

type Props = {
  isUpdateTodo?: boolean;
  todo?: Todo;
};

export const TodosForm: React.FC<Props> = ({ todo, isUpdateTodo = false }) => {
  return (
    <form action={addTodo} className="grid gap-4">
      <div>
        <Label htmlFor="taskTitle">Title</Label>
        <Input
          id="taskTitle"
          name="title"
          placeholder="Enter task title"
          defaultValue={todo?.title}
          required
        />
      </div>

      <div>
        <Label htmlFor="taskDescription">Description</Label>
        <Textarea
          id="taskDescription"
          name="description"
          placeholder="Enter detailed task description"
          defaultValue={todo?.description}
          required
        />
      </div>

      {/* Priority */}
      <div className="mb-6">
        <Label htmlFor="priority" className="block text-lg font-medium text-gray-700">
          Priority
        </Label>
        <Select
          defaultValue={todo?.priority ?? Priority.ANY}
          name="priority"
          required
        >
          <SelectTrigger className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={Priority.P1}>P1</SelectItem>
            <SelectItem value={Priority.P2}>P2</SelectItem>
            <SelectItem value={Priority.P3}>P3</SelectItem>
            <SelectItem value={Priority.P4}>P4</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="due_date">Due Date</Label>
        <Input
          id="due_date"
          name="due_date"
          type="date"
          defaultValue={todo?.due_date}
          required
        />
      </div>

      <div className="mb-6 flex items-center">
        <Checkbox
          id="completed"
          name="completed"
          defaultChecked={todo?.completed || false}
          className="mr-2"
        />
        <Label htmlFor="completed" className="text-md">
          Is Completed
        </Label>
      </div>

      <Button type="submit" className="w-full">

      </Button>
    </form>
  );
};
