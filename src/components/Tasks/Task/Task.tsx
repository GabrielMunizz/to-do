type TaskProps = {
  children: string;
};

export default function Task({ children }: TaskProps) {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
}
