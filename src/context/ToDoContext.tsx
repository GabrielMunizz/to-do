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
  completedTasks: TaskType[];
  setCompletedTasks: Dispatch<SetStateAction<TaskType[]>>;
  deleteTask: (taskId: number | null) => void;
  loadTasks: () => TaskType[];
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
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);

  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const loadTasks: TaskType[] = JSON.parse(savedTasks);
      return loadTasks;
    }
    return [];
  }

  const saveTask = (newTask: string) => {
    const savedTasks = loadTasks();  
    const id = savedTasks.length === 0 ? 1 : savedTasks[savedTasks.length - 1].id + 1;
    const addNewTask = [...savedTasks, { id, toDo: newTask, checked: false }];   
    
    localStorage.setItem("tasks", JSON.stringify(addNewTask));
    const reloadTasks = loadTasks();
    const openTasks = reloadTasks.filter((task) => !task.checked);
    setTasks(openTasks);
    setIsModalOpen(false);
  };  

  const deleteTask = (taskId: number | null) => {
    const isTaskSaved = localStorage.getItem("tasks");
    if (isTaskSaved) {
      const loadedTasks: TaskType[] = JSON.parse(isTaskSaved);
      const filteredTasks = loadedTasks.filter((task) => task.id !== taskId);
      const remainCompletedTasks = filteredTasks.filter((task) => task?.checked)

      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      setTasks(filteredTasks);
      setCompletedTasks(remainCompletedTasks);
      setTaskId(null);
      setWantToDelete(false);
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
        completedTasks,
        setCompletedTasks,
        deleteTask,
        loadTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
