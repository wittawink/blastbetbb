import BaseMenu from "@/ui/base/BaseMenu";
import React from "react";

interface LayoutFooterProps {
  text: string;
}

export default function LayoutFooter({ text }: LayoutFooterProps) {
  return (
    <div className="h-[calc(100vh-162px)] border-[2px] border-[#FCFC03] rounded-[20px] p-[12px] mb-[24px] mx-[24px] float-left sticky top-[138px]">
      <BaseMenu text={"Hello"} />
    </div>
  );
}
