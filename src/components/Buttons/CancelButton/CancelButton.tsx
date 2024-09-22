import "./CancelButton.scss";

type CancelButtonProps = {
  onClick: () => void;
};

export default function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <button className='cancelButton secondButton' onClick={onClick}>
      Cancelar
    </button>
  );
}
