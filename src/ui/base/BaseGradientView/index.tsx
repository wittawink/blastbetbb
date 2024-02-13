import cn from "@/lib/cn";
import React from "react";

interface BaseGradientViewProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  fromColor: string;
  toColor: string;
  borderColor: string;
}

export default function BaseGradientView({
  className,
  fromColor,
  toColor,
  borderColor,
  children,
}: BaseGradientViewProps) {
  return (
    <div
      className={cn(
        className,
        `w-full rounded-[20px] bg-gradient-to-br from-[${fromColor}] to-[${toColor}] border-[${borderColor}] border-[2px]`
      )}
    >
      {children}
    </div>
  );
}
