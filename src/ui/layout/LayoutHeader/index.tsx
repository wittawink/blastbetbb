import BaseProfile from "@/ui/base/BaseProfile";
import React from "react";

interface LayoutHeaderProps {
  text: string;
}

export default function LayoutHeader({ text }: LayoutHeaderProps) {
  return (
    <div className="m-[24px] flex flex-col">
      <BaseProfile profileName={"CASINO"} />
      <div className="grow" />
    </div>
  );
}
