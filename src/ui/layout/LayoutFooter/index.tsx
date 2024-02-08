import React from "react";

interface LayoutFooterProps {
  text: string;
}

export default function LayoutFooter({ text }: LayoutFooterProps) {
  return <div className="">{text}</div>;
}
