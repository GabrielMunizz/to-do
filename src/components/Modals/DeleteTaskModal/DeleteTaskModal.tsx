'use client';

import CancelButton from '@/components/Buttons/CancelButton/CancelButton';
import DeleteButton from '@/components/Buttons/DeleteButton/DeleteButton';
import { TodoContext } from '@/context/ToDoContext';
import { useContext } from 'react';
import './DeleteTaskModal.scss';

export default function DeleteTaskModal() {
  const { setWantToDelete, wantToDelete, setTaskId } = useContext(TodoContext);
  const handleCancel = () => {
    setTaskId(null);
    setWantToDelete(false);
  };
  return (
    wantToDelete && (
      <div className="taskModal deleteTaskModal">
        <div className="modalTitleContainer">
          <h2>Deletar tarefa</h2>
        </div>
        <div className="subtitleContainer">
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
        </div>
        <div className="buttonsContainer">
          <DeleteButton />
          <CancelButton onClick={handleCancel} />
        </div>
      </div>
    )
  );
}
