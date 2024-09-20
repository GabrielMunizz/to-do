type ButtonProps = {
  onClick: () => void;
  style?: React.CSSProperties;
  children: string;
};

export default function Button({ children, style, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
