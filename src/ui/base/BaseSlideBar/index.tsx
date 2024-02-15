"use client";
import cn from "@/lib/cn";
import React, { useEffect, useState } from "react";
import customInput from "@/styles/custom-input.module.css";

interface BaseSlideBarProps {
  title: string;
  value: string;
  min: number;
  max: number;
  step: number;
  handleOnSlideBar: (value: string) => void;
}

export default function BaseSlideBar({
  value,
  min,
  max,
  step,
  handleOnSlideBar,
}: BaseSlideBarProps) {
  return (
    <input
      className={cn(customInput.slideBar, "w-full")}
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(evt) => {
        handleOnSlideBar(evt.target.value);
      }}
    />
  );
}
