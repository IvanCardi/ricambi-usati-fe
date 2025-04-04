import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface CustomSelectProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  options: string[] | number[];
  disabled?: boolean;
}

export default function FormSelect<T extends FieldValues>({
  options,
  field,
  disabled = false,
}: CustomSelectProps<T>) {
  return (
    <Select
      onValueChange={(value) => {
        field.onChange(typeof options[0] === "number" ? +value : value);
      }}
      key={options[0]}
    >
      <SelectTrigger
        className="w-2/3 border border-none bg-[#F2F2F2] py-[26px] px-[36px] rounded-[9px]"
        style={{
          boxShadow: "0px 2px 2.67px 0px #00000040",
        }}
        disabled={disabled}
      >
        <SelectValue
          placeholder={"Seleziona un valore"}
          className="placeholder:text-2xl"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option) => (
            <SelectItem
              key={option}
              value={typeof option === "string" ? option : `${option}`}
            >
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
