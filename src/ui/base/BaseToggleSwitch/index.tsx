import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";

interface BaseToggleSwitchProps {
  className?: string;
  handleOnChangeSwitch: (isHead: boolean) => void;
}

export default function BaseToggleSwitch({
  className,
  handleOnChangeSwitch,
}: BaseToggleSwitchProps) {
  return (
    <div
      className={cn(
        customInput.toggleButton,
        className,
        "flex items-center bg-[#11140C] border-2 border-solid border-[#404833] rounded-[27px] select-none w-[458px] h-[107px]"
      )}
    >
      <input
        type="radio"
        id="heads"
        name="toggle"
        defaultChecked
        onClick={() => {
          handleOnChangeSwitch(true);
        }}
      />
      <label className="text-[32px] ml-[6px] font-geomGraphic" htmlFor="heads">
        Heads
      </label>
      <input
        type="radio"
        id="trails"
        name="toggle"
        onClick={() => {
          handleOnChangeSwitch(false);
        }}
      />
      <label
        className="text-[32px] ml-[-48px] font-geomGraphic"
        htmlFor="trails"
      >
        Tails
      </label>
    </div>
  );
}
