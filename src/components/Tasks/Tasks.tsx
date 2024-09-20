"use client";

import { useEffect, useContext } from "react";
import Task from "./Task/Task";
import { TodoContext } from "@/context/ToDoContext";
import Button from "../Button/Button";

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
      <div>
        <div>
          <p>Suas tarefas de hoje</p>
        </div>
        <div>
          {tasks.length !== 0 ? (
            tasks.map(({ toDo, id }) => (
              <Task key={id} id={id}>
                {toDo}
              </Task>
            ))
          ) : (
            <p>Nenhuma tarefa adicionada</p>
          )}
        </div>
      </div>
      <Button onClick={() => setIsModalOpen(true)}>
        Adicionar nova tarefa
      </Button>
    </section>
  );
}
