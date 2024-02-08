import React from "react";

interface BaseToggleSwitchProps {
  text: string;
}

export default function BaseToggleSwitch({ text }: BaseToggleSwitchProps) {
  return <div className="">{text}</div>;
}
