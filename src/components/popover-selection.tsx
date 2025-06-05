import { cn } from "@/lib/utils";
import { ChevronsUpDown, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import {
    Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

export default function PopoverSelection({
  onSelect,
  options,
  value,
  placeholder,
}: {
  value?: string;
  options: { id: string; name: string }[];
  onSelect: (val: string) => void;
  placeholder: string;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-full justify-between  border-[3px] border-[#0BB489]",
            !value && "text-muted-foreground"
          )}
        >
          {value ? options.find((opt) => opt.id === value)?.name : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 left-0">
        <Command>
          <CommandInput placeholder="Cerca..." className="h-9" />
          <CommandList>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  value={opt.name}
                  key={opt.id}
                  onSelect={() => {
                    onSelect(opt.id);
                  }}
                >
                  {opt.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      opt.id === value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
