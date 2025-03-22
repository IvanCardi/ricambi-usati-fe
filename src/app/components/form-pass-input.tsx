import { Eye, EyeClosed } from "lucide-react";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

export default function FormPassInput(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative">
      <input
        style={{
          boxShadow: "0px 2px 2.67px 0px #00000040",
        }}
        className={`w-full py-[26px] px-[36px] bg-neutral-gray rounded-[9px]`}
        type={showPass ? "text" : "password"}
        {...props}
      />
      <button
        type="button"
        className="absolute right-[26px] top-7 text-gray-500"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? (
          <EyeClosed className="w-5 h-5" />
        ) : (
          <Eye className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
