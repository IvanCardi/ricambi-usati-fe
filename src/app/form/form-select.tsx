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
  options: string[];
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
        field.onChange(value);
      }}
      key={options[0]}
    >
      <SelectTrigger
        className="w-1/2 border border-none bg-[#F2F2F2]"
        style={{
          boxShadow: "0px 2px 2.67px 0px #00000040",
        }}
        disabled={disabled}
      >
        <SelectValue placeholder={"Seleziona un valore"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
