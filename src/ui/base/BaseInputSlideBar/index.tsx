"use client";
import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";

interface BaseInputSlideBarProps {
  title: string;
  value: string;
  min: number;
  max: number;
  step: number;
  handleOnSlideBar: (value: string) => void;
}

export default function BaseInputSlideBar({
  title,
  value,
  min,
  max,
  step,
  handleOnSlideBar,
}: BaseInputSlideBarProps) {
  return (
    <div className="font-geomGraphic">
      <p className="text-[20px] font-bold text-[#FCFDC7]">{title}</p>
      <div className="flex items-center mt-[8px] w-full h-14 bg-[#11140C] border-2 rounded-[10px] border-[#9BA885]">
        <p className="text-base text-[#FCFDC7] font-semibold ml-[18px]">
          {value}
        </p>
      </div>
      <input
        className={cn(customInput.slideBar, "w-full mt-[22px]")}
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(evt) => {
          handleOnSlideBar(evt.target.value);
        }}
      />
    </div>
  );
}
