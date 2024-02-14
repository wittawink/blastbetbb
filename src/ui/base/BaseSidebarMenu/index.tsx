import React from "react";

interface BaseSlidebarMenuProps {
  text: string;
}

export default function BaseSlidebarMenu({ text }: BaseSlidebarMenuProps) {
  return <div className="">{text}</div>;
}
