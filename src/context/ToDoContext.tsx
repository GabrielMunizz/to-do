"use client";

import { TaskType } from "@/utils/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type ToDoContextType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  wantToDelete: boolean;
  setWantToDelete: Dispatch<SetStateAction<boolean>>;
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  saveTask: (newTask: string) => void;
  taskId: number | null;
  setTaskId: Dispatch<SetStateAction<number | null>>;
  deleteTask: (taskId: number) => void;
};

export const TodoContext = createContext({} as ToDoContextType);

type TodoProviderType = {
  children: React.ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wantToDelete, setWantToDelete] = useState(false);
  const [taskId, setTaskId] = useState<number | null>(null);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const saveTask = (newTask: string) => {
    const addNewTask = [...tasks, { id: tasks.length + 1, toDo: newTask }];

    localStorage.setItem("tasks", JSON.stringify(addNewTask));
    setTasks(addNewTask);
  };

  const deleteTask = (taskId: number) => {
    const isTaskSaved = localStorage.getItem("tasks");
    if (isTaskSaved) {
      const loadedTasks: TaskType[] = JSON.parse(isTaskSaved);
      const filteredTasks = loadedTasks.filter((task) => task.id !== taskId);

      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      setTasks(filteredTasks);
      setTaskId(null);
    }
  };
  return (
    <TodoContext.Provider
      value={{
        saveTask,
        isModalOpen,
        setIsModalOpen,
        wantToDelete,
        setWantToDelete,
        tasks,
        taskId,
        setTaskId,
        setTasks,
        deleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
