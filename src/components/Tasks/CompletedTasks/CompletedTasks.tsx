"use client";

import { TodoContext } from "@/context/ToDoContext";
import { useContext } from "react";
import Task from "../Task/Task";

export default function CompletedTasks() {
  const { completedTasks } = useContext(TodoContext);
  return (
    completedTasks.length !== 0 && (
      <>
        <div>
          <p className="subText">Tarefas finalizadas</p>
        </div>
        <div className="tasksContainer">
          {completedTasks.map(({ toDo, id }) => (
            <Task completedTask='completedTask' key={id} id={id}>
              {toDo}
            </Task>
          ))}
        </div>
      </>
    )
  );
}
