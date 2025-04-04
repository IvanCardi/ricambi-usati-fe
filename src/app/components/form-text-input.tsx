import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function FormTextInput(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const { className, ...restProps } = props;

  return (
    <div>
      <input
        style={{
          boxShadow: "0px 2px 2.67px 0px #00000040",
        }}
        className={`w-full py-[26px] px-[36px] bg-neutral-gray rounded-[9px] ${
          className ?? ""
        } ${props.disabled ? "text-gray-400" : " text-black"} `}
        {...restProps}
      />
    </div>
  );
}
