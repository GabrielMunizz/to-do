"use client";

import { useEffect, useContext } from "react";
import Task from "./Task/Task";
import { TodoContext } from "@/context/ToDoContext";
import "./Tasks.scss";
import AddButton from "../Button/AddButton/AddButton";

export default function Tasks() {
  const { setTasks, setIsModalOpen, tasks } = useContext(TodoContext);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  return (
    <section>
      <div className="mainContent">
        <div>
          <p className="subText">Suas tarefas de hoje</p>
        </div>
        <div className="tasksContainer">
          {tasks.length !== 0 ? (
            tasks.map(({ toDo, id }) => (
              <Task key={id} id={id}>
                {toDo}
              </Task>
            ))
          ) : (
            <p className="subText">Nenhuma tarefa adicionada</p>
          )}
        </div>
      </div>
      <AddButton onClick={() => setIsModalOpen(true)}>
        Adicionar nova tarefa
      </AddButton>
    </section>
  );
}
