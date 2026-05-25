export function Button({
  btnText,
  btnType,
  onClick,
}: {
  btnText: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  return (
    <button type={btnType} onClick={onClick}>
      {btnText}
    </button>
  );
}
