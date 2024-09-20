"use client";
import { TaskType } from "../../utils/types";
import { useState, useEffect } from "react";
import Task from "./Task/Task";

export default function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const saveTask = (newTask: string) => {
    const addNewTask = [...tasks, { id: tasks.length + 1, toDo: newTask }];
    setTasks(addNewTask);
  };

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
            tasks.map(({ toDo, id }) => <Task key={id}>{toDo}</Task>)
          ) : (
            <p>Nenhuma tarefa adicionada</p>
          )}
        </div>
      </div>
    </section>
  );
}
