import React from "react";

interface BaseMenuProps {
  text: string;
}

export default function BaseMenu({ text }: BaseMenuProps) {
  return (
    <button className="w-[116px] h-[116px] rounded-2xl border border-solid border-[#75835D] flex flex-col items-center justify-center active:bg-[#FCFDC7] active:border-0">
      <div className="w-[53px] h-[53px] rounded-full bg-[#75835D] active:bg-[#FCFC03]"></div>
      <div className="text-[#75835D] text-base font-semibold mt-[11px] active:text-[#FCFC03]">
        {text}
      </div>
    </button>
  );
}
