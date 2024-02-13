import React from "react";

interface BaseInputProps {
  text: string;
}

export default function BaseInput({ text }: BaseInputProps) {
  return (
    <div>
      <p className="text-xl text-[#FCFDC7] font-semibold mx-6 mt-7 ">{text}</p>

      <div className="w-52 h-20 bg-[#11140C] border-2 border-[#9BA885] bg-inherit rounded-lg ml-6 mt-3 "></div>
    </div>
  );
}
