"use client";

import Image from "next/image";
import trashBin from "../../../assets/trash.png";
import { useContext } from "react";
import { TodoContext } from "@/context/ToDoContext";

type TaskProps = {
  id: number;
  children: string;
};

export default function Task({ children, id }: TaskProps) {
  const { setWantToDelete, setTaskId } = useContext(TodoContext);

  const handleWantToDelete = () => {
    setTaskId(id);
    setWantToDelete(true);
  };

  return (
    <div>
      <p>{children}</p>
      <button onClick={handleWantToDelete}>
        <Image src={trashBin} alt="trash bin icon" />
      </button>
    </div>
  );
}
