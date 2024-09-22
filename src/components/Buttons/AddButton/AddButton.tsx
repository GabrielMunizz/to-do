import "./AddButton.scss";

type ButtonProps = {
  onClick: () => void;
  addClass?: string;
  children: string;
};

export default function AddButton({
  children,
  addClass,
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={addClass}>
      {children}
    </button>
  );
}
