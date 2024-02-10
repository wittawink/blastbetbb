import React from "react";

interface BaseInputProps {
  text: string;
}

export default function BaseInput({ text }: BaseInputProps) {
  return (
    <div>
      <p className="text-xl font-semibold mx-6 mt-7">{text}</p>

      <div className="w-52 h-20 border-2 border-[#FCFC03] bg-inherit rounded-lg ml-6 mt-3 "></div>
    </div>
  );
}
