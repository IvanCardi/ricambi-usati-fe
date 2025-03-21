export default function Button(props: {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button";
}) {
  return (
    <button
      className={`w-full py-6 px-10 rounded-[9px] ${props.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
