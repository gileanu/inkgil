"use client";

import { cn } from "@/lib/utils";
import { LucideIcon, Undo2Icon } from "lucide-react";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 w-7 min-h-7 flex items-center justify-center rounded-sm hover:bg-slate-200",
        isActive && "bg-slate-400"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export const Toolbar = () => {
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => console.log("Clicked"),
      },
    ],
  ];

  return (
    <div className="bg-slate-100 px-2.5 py-2.5 min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto border-b-2">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
