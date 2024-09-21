"use client";

import { useContext, useState } from "react";
import AddButton from "@/components/Button/AddButton/AddButton";
import CancelButton from "@/components/Button/CancelButton/CancelButton";
import { TodoContext } from "@/context/ToDoContext";

export default function AddTaskModal() {
  const [newTask, setNewTask] = useState("");
  const { setIsModalOpen, isModalOpen, saveTask } = useContext(TodoContext);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setNewTask(value);
  };

  const handleSaveTask = () => {
    saveTask(newTask);
    setNewTask("");
  };

  console.log(newTask);
  return (
    isModalOpen && (
      <div>
        <h2>Nova tarefa</h2>
        <div>
          <label htmlFor="newTask">Título</label>
          <input
            id="newTask"
            type="text"
            value={newTask}
            placeholder="Digite"
            onChange={handleChange}
          />
        </div>
        <div>
          <CancelButton onClick={() => setIsModalOpen(false)} />

          <AddButton addClass="smallButton" onClick={handleSaveTask}>
            Adicionar
          </AddButton>
        </div>
      </div>
    )
  );
}
