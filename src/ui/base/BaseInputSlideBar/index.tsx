import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";

interface BaseInputSlideBarProps {
  text: string;
}

export default function BaseInputSlideBar({ text }: BaseInputSlideBarProps) {
  return (
    <div>
      <p className="text-[20px] font-semibold">Wager</p>
      <div className="flex items-center mt-[8px] w-[408px] h-[73px] border-2 border-[#FCFC03]">
        <p className="text-base font-semibold ml-[18px]">Choose a wager...</p>
      </div>
      <input
        className={cn(customInput.slideBar, "w-[382px] ml-[12px] mt-[22px]")}
        type="range"
        min={1}
        max={100}
      />
    </div>
  );
}
