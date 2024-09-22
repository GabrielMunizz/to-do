'use client';

import CancelButton from '@/components/Buttons/CancelButton/CancelButton';
import DeleteButton from '@/components/Buttons/DeleteButton/DeleteButton';
import { TodoContext } from '@/context/ToDoContext';
import { useContext, useEffect } from 'react';
import './DeleteTaskModal.scss';

export default function DeleteTaskModal() {
  const { setWantToDelete, wantToDelete, setTaskId } = useContext(TodoContext);
  const handleCancel = () => {
    setTaskId(null);
    setWantToDelete(false);
  };

  useEffect(() => {
    if (wantToDelete) {
      window.scrollTo(0, 0);
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [wantToDelete])
  return (
    wantToDelete && (
      <>
        <div className='blurry'/>
        <div className="taskModal deleteTaskModal">
          <div className="modalTitleContainer">
            <h4>Deletar tarefa</h4>
          </div>
          <div className="subtitleContainer">
            <p>Tem certeza que você deseja deletar essa tarefa?</p>
          </div>
          <div className="buttonsContainer">
            <DeleteButton />
            <CancelButton onClick={handleCancel} />
          </div>
        </div>
      </>
    )
  );
}
