"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CommonDialog } from "./CommonDialog";
import { TodosForm } from "./TodosForm";

export const AddTodoButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Button variant="outline" onClick={openDialog}>
        Add Task
      </Button>

      <CommonDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title="Create a new task"
      >
        <TodosForm />
      </CommonDialog>
    </>
  );
};
