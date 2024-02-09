import cn from "@/lib/cn";
import BaseProfile from "@/ui/base/BaseProfile";
import React from "react";

interface LayoutFooterProps {
  className?: string;
}

export default function LayoutFooter({ className }: LayoutFooterProps) {
  return (
    <div
      className={cn(
        className,
        "flex items-center w-full h-[200px] rounded-[20px] bg-gradient-to-br from-[#11140C] to-[#75835D]"
      )}
    >
      <BaseProfile className="ml-[52px]" profileName={"CASINO"} />
    </div>
  );
}
