type CancelButtonProps = {
  onClick: () => void;
};

export default function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <button onClick={onClick} className="">
      Cancelar
    </button>
  );
}
