import React from "react";

interface BaseInputSlideBarProps {
  text: string;
}

export default function BaseInputSlideBar({ text }: BaseInputSlideBarProps) {
  return <div className="">{text}</div>;
}
