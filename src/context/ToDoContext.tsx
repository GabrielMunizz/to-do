"use client";

import { TaskType } from "@/utils/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type ToDoContextType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  saveTask: (newTask: string) => void;
};

export const TodoContext = createContext({} as ToDoContextType);

type TodoProviderType = {
  children: React.ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const saveTask = (newTask: string) => {
    const addNewTask = [...tasks, { id: tasks.length + 1, toDo: newTask }];
    localStorage.setItem("tasks", JSON.stringify(addNewTask));
    setTasks(addNewTask);
  };

  return (
    <TodoContext.Provider
      value={{ saveTask, isModalOpen, setIsModalOpen, tasks, setTasks }}
    >
      {children}
    </TodoContext.Provider>
  );
};
