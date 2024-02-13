import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";

interface BaseInputSlideBarProps {
  text: string;
}

export default function BaseInputSlideBar({ text }: BaseInputSlideBarProps) {
  return (
    <div>
      <p className="text-[20px] font-bold text-[#FCFDC7]">{text}</p>
      <div className="flex items-center mt-[8px] w-[408px] h-[73px] bg-[#11140C] border-2 rounded-[10px] border-[#9BA885]">
        <p className="text-base text-[#FCFDC7] font-semibold ml-[18px]">
          {text}
        </p>
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
