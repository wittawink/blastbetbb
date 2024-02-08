import React from "react";

interface BaseProfileProps {
  text: string;
}

export default function BaseProfile({ text }: BaseProfileProps) {
  return <div className="">{text}</div>;
}
