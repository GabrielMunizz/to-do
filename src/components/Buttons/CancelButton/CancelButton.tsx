import "./CancelButton.scss";

type CancelButtonProps = {
  onClick: () => void;
};

export default function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <button className='cancelButton' onClick={onClick}>
      Cancelar
    </button>
  );
}
