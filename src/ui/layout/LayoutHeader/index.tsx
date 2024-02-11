import BaseButton from "@/ui/base/BaseButton";
import BaseProfile from "@/ui/base/BaseProfile";
import React from "react";

interface LayoutHeaderProps {
  text: string;
}

export default function LayoutHeader({ text }: LayoutHeaderProps) {
  return (
    <div className="p-[24px] flex flex-row items-center sticky top-0 bg-black z-50">
      <BaseProfile profileName={text} />
      <div className="grow" />
      <BaseButton text={"Connect Wallet"}></BaseButton>
    </div>
  );
}
