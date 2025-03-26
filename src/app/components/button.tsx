export default function Button(props: {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button";
  onClick?: () => void;
}) {
  return (
    <button
      className={`w-full py-6 px-10 rounded-[9px] ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
