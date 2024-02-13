import { Routes } from "@/config/routes";
import BaseMenu from "@/ui/base/BaseMenu";
import React from "react";

interface LayoutSidebarProps {
  text: string;
}

export default function LayoutSidebar({ text }: LayoutSidebarProps) {
  return (
    <div className="h-[calc(100vh-120px)] border-[2px] border-[#404833] rounded-[20px] p-[16px] mb-[16px] ml-[32px] mr-[16px] float-left sticky top-[104px]">
      <BaseMenu
        className="mb-[16px]"
        title={"Home"}
        linkPath={Routes.public.HOME}
      />
      <BaseMenu
        className="mb-[16px]"
        title={"Coinflip"}
        linkPath={Routes.public.COIN_FLIP}
      />
      <BaseMenu
        className="mb-[16px]"
        title={"Dice"}
        linkPath={Routes.public.DICE}
      />
    </div>
  );
}
