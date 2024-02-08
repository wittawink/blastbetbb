import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";

interface ButtonProps {
  text: string;
}

export default function BaseButton({ text }: ButtonProps) {
  return (
    <button
      className={cn(customInput.checkCustom, " hover:bg-white hover:border-8")}
    >
      {text}
    </button>
  );
}
