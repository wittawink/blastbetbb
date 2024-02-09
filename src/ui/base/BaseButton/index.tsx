import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";

interface ButtonProps {
  text: string;
}

export default function BaseButton({ text }: ButtonProps) {
  return (
    <button
      className={cn(customInput.connectWallet, 'h-[80px] w-[300px] text-[28px] font-bold bg-[#FCFC03] rounded-[20px] relative overflow-hidden transition-all duration-1000 text-black')}
    >
      {text}
    </button>
  );
}
