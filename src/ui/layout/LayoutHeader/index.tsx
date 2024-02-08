import React from "react";

interface LayoutHeaderProps {
  text: string;
}

export default function LayoutHeader({ text }: LayoutHeaderProps) {
  return <div className="">{text}</div>;
}
