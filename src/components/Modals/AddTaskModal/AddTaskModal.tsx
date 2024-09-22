"use client";

import { useContext, useState } from "react";
import AddButton from "@/components/Buttons/AddButton/AddButton";
import CancelButton from "@/components/Buttons/CancelButton/CancelButton";
import { TodoContext } from "@/context/ToDoContext";
import './AddTaskModal.scss';

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

  return (
    isModalOpen && (
      <div className='taskModal'>
        <div className='modalTitleContainer'>
          <h2>Nova tarefa</h2>
        </div>
        <div className='inputContainer'>
          <label htmlFor="newTask">Título</label>
          <input
            id="newTask"
            type="text"
            value={newTask}
            placeholder="Digite"
            onChange={handleChange}
          />
        </div>
        <div className='buttonsContainer'>
          <AddButton addClass='confirmAdd' onClick={handleSaveTask}>
            Adicionar
          </AddButton>

          <CancelButton onClick={() => setIsModalOpen(false)} />
          <AddButton addClass='smallButton' onClick={handleSaveTask}>
            Adicionar
          </AddButton>
        </div>
      </div>
    )
  );
}
