import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";

type AddTaskModalProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function AddTaskModal({ setIsModalOpen }: AddTaskModalProps) {
  return (
    <div>
      <h2>Nova tarefa</h2>
      <div>
        <label htmlFor="newTask">Título</label>
        <input id="newTask" type="text" placeholder="Digite" />
      </div>
      <div>
        <Button onClick={() => setIsModalOpen(false)}>Cancelar</Button>
      </div>
    </div>
  );
}
