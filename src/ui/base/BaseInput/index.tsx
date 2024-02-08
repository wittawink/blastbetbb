import React from "react";

interface BaseInputProps {
  text: string;
}

export default function BaseInput({ text }: BaseInputProps) {
  return <div className="">{text}</div>;
}
