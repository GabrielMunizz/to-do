"use client";

import Button from "@/components/Button/Button";
import { TodoContext } from "@/context/ToDoContext";
import { useContext } from "react";

export default function DeleteTaskModal() {
  const { setWantToDelete, wantToDelete, setTaskId, deleteTask, taskId } =
    useContext(TodoContext);
  const handleCancel = () => {
    setTaskId(null);
    setWantToDelete(false);
  };
  return (
    wantToDelete && (
      <div>
        <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button onClick={() => deleteTask(taskId)}>Deletar</Button>
        </div>
      </div>
    )
  );
}
