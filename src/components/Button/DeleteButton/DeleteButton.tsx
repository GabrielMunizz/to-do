"use client";

import { useContext } from "react";
import "./DeleteButton.scss";
import { TodoContext } from "@/context/ToDoContext";

export default function DeleteButton() {
  const { deleteTask, taskId } = useContext(TodoContext);
  return (
    <button onClick={() => deleteTask(taskId)} className="deleteButton">
      Deletar
    </button>
  );
}
