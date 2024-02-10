import BaseButton from "@/ui/base/BaseButton";
import BaseProfile from "@/ui/base/BaseProfile";
import React from "react";

interface LayoutHeaderProps {
  text: string;
}

export default function LayoutHeader({ text }: LayoutHeaderProps) {
  return (
    <div className="m-[24px] flex flex-row items-center">
      <BaseProfile profileName={"CASINO"} />
      <div className="grow" />
      <BaseButton text={"Connect Wallet"}></BaseButton>
    </div>
  );
}
