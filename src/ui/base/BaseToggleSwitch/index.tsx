import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";

interface BaseToggleSwitchProps {
  text: string;
}

export default function BaseToggleSwitch({ text }: BaseToggleSwitchProps) {
  return (
    <div
      className={cn(
        customInput.toggleButton,
        "flex items-center bg-[#11140C] border-2 border-solid border-[#404833] rounded-[100px] select-none w-[458px] h-[107px]"
      )}
    >
      <input type="radio" id="heads" name="toggle" defaultChecked />
      <label className="text-[32px] ml-[6px]" htmlFor="heads">
        Heads
      </label>
      <input type="radio" id="trails" name="toggle" />
      <label className="text-[32px] ml-[-48px]" htmlFor="trails">
        Tails
      </label>
    </div>
  );
}
