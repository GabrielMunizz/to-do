"use client";

import CancelButton from "@/components/Button/CancelButton/CancelButton";
import DeleteButton from "@/components/Button/DeleteButton/DeleteButton";
import { TodoContext } from "@/context/ToDoContext";
import { useContext } from "react";

export default function DeleteTaskModal() {
  const { setWantToDelete, wantToDelete, setTaskId } = useContext(TodoContext);
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
          <CancelButton onClick={handleCancel} />
          <DeleteButton />
        </div>
      </div>
    )
  );
}
