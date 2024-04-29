import cn from "@/lib/cn";
import React from "react";

interface BaseTextBoxProps {
  title: string;
  value: string;
  className?: string;
}

export default function BaseTextBox({
  title,
  value,
  className,
}: BaseTextBoxProps) {
  return (
    <div className={cn(className)}>
      <p className="text-xl text-[#FCFDC7] font-geomGraphic font-semibold">
        {title}
      </p>
      <div className="mt-2 h-14 bg-[#11140C] border-2 border-[#9BA885] bg-inherit rounded-[10px] p-6 flex items-center font-geomGraphic">
        {value}
      </div>
    </div>
  );
}
