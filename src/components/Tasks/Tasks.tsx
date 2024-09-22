"use client";

import { useEffect, useContext } from "react";
import { TodoContext } from "@/context/ToDoContext";
import "./Tasks.scss";
import AddButton from "../Buttons/AddButton/AddButton";
import { TaskType } from "@/utils/types";
import CompletedTasks from "./CompletedTasks/CompletedTasks";
import OpenTasks from "./OpenTasks/OpenTasks";

export default function Tasks() {
  const { setTasks, setCompletedTasks, setIsModalOpen } =
    useContext(TodoContext);    

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const allTasks: TaskType[] = JSON.parse(savedTasks);
      const openTasks = allTasks.filter((task) => !task.checked);
      const checkedTasks = allTasks.filter((task) => task.checked);
      setCompletedTasks(checkedTasks);
      setTasks(openTasks);
    }
  }, []);
  return (
    <section>
      <div className="mainContent">
        <OpenTasks />
        <CompletedTasks />
      </div>
      <AddButton addClass='addButton' onClick={() => setIsModalOpen(true)}>
        Adicionar nova tarefa
      </AddButton>
    </section>
  );
}
