import cn from "@/lib/cn";
import React from "react";

interface BaseProfileProps {
  className?: string;
  profileName: string;
}

export default function BaseProfile({
  className,
  profileName,
}: BaseProfileProps) {
  return (
    <div className={cn(className, "flex flex-row items-center")}>
      <div className="w-[90px] h-[90px] bg-[#FCFC03] rounded-full"></div>
      <div className="ml-[24px] text-[36px]">{profileName}</div>
    </div>
  );
}
