"use client";

import Image from "next/image";
import trashBin from "../../../assets/trash.png";
import { useContext, useState } from "react";
import { TodoContext } from "@/context/ToDoContext";
import "./Task.scss";

type TaskProps = {
  id: number;
  children: string;
  completedTask?: string;
};

export default function Task({ children, id, completedTask }: TaskProps) {
  const { setWantToDelete, setTaskId, setCompletedTasks, loadTasks, setTasks } = useContext(TodoContext);

  const savedTasks = loadTasks();
  const isTaskChecked = savedTasks[id - 1]?.checked;  

  const [isChecked, setIsChecked] = useState(isTaskChecked);
  

  const handleCheck = () => {
    const updatedCheck = !isTaskChecked;

    const updatedTasks = savedTasks.map((task) =>
      task.id === id ? { ...task, checked: updatedCheck } : task
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    const loadedTasks = loadTasks();
    const checkedTasks = loadedTasks.filter((task) => task?.checked);
    const openTasks = loadedTasks.filter((task) => !task?.checked);


    setIsChecked(updatedCheck);
    setCompletedTasks(checkedTasks);
    setTasks(openTasks);
  };

  const handleWantToDelete = () => {
    setTaskId(id);
    setWantToDelete(true);
  };

  return (
    <div className="taskContainer">
      <input
        className="checkbox"
        type="checkbox"
        name="checkTask"
        id="checkTask"
        checked={isChecked}
        onChange={handleCheck}
      />
      <p className={completedTask}>{children}</p>
      <button onClick={handleWantToDelete}>
        <Image className="buttonImage" src={trashBin} alt="trash bin icon" />
      </button>
    </div>
  );
}
