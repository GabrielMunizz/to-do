"use client";

import { TodoContext } from "@/context/ToDoContext";
import { useContext } from "react";
import Task from "../Task/Task";

export default function OpenTasks() {
  const { tasks } = useContext(TodoContext);
  return (
    <>
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
    </>
  );
}
