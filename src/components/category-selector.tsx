import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Command, CommandItem, CommandList } from "./ui/command";

export type Category = {
  name: string;
  children?: Category[];
};

type Props = {
  data: Category[];
  value?: string;
  onChange: (val: string) => void;
  allowParentSelection?: boolean;
  disabled?: boolean;
};

export const CategorySelector: React.FC<Props> = ({
  data,
  value,
  onChange,
  allowParentSelection = false,
  disabled,
}) => {
  const [path, setPath] = useState<Category[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(value);
  const [isOpen, setIsOpen] = useState(false);

  const currentLevel = path.reduce(
    (children, node) => node.children ?? [],
    data
  );
  const currentCategory = path[path.length - 1];

  const fullPath = (list: Category[]) => list.map((n) => n.name).join(" / ");

  const handleSelectPath = (newPath: Category[]) => {
    const label = fullPath(newPath);
    onChange(label);
    setSelectedLabel(label);
    setPath([]);
    setTimeout(() => setIsOpen(false), 0); // Manual close
  };

  const handleClickItem = (item: Category) => {
    const newPath = [...path, item];
    const isLeaf = !item.children || item.children.length === 0;

    if (isLeaf) {
      handleSelectPath(newPath);
    } else {
      setPath(newPath);
    }
  };

  const handleBack = () => {
    setPath((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setIsOpen(false);
    onChange("");
    setSelectedLabel(undefined);
    setPath([]);
  };

  useEffect(() => {
    if (value) setSelectedLabel(value);
  }, [value]);

  return (
    <Popover
      open={isOpen}
      onOpenChange={(open) => {
        if (disabled) setIsOpen(false);
        else setIsOpen(open);
      }}
    >
      <PopoverTrigger asChild disabled={disabled}>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="flex-1 justify-between border-[3px] border-[#0BB489] text-muted-foreground"
            disabled={disabled}
          >
            {selectedLabel ?? "Seleziona la categoria"}
          </Button>
          {selectedLabel && (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={handleClear}
            >
              ✕
            </Button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[320px] p-2"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Command shouldFilter={false}>
          <CommandList className="max-h-64 overflow-auto">
            {path.length > 0 && (
              <CommandItem asChild>
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full text-left text-muted-foreground"
                >
                  ← Back
                </button>
              </CommandItem>
            )}

            {allowParentSelection && path.length > 0 && currentCategory && (
              <CommandItem asChild>
                <button
                  type="button"
                  onClick={() => handleSelectPath(path)}
                  className="w-full text-left text-blue-500 font-medium"
                >
                  ✓ Select {currentCategory.name}
                </button>
              </CommandItem>
            )}

            {currentLevel.map((item, index) => (
              <CommandItem key={index} asChild>
                <button
                  type="button"
                  onClick={() => handleClickItem(item)}
                  className="w-full text-left"
                >
                  {item.name}
                </button>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
