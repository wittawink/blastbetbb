import { Routes } from "@/config/routes";
import BaseMenu from "@/ui/base/BaseMenu";
import React from "react";
import Home from "@/assets/Icon/home.svg";
import Dice from "@/assets/Icon/dice.svg";
import Coin from "@/assets/Icon/coin.svg";

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
        icon={Home}
      />
      <BaseMenu
        className="mb-[16px]"
        title={"Coinflip"}
        linkPath={Routes.public.COIN_FLIP}
        icon={Coin}
      />
      <BaseMenu
        className="mb-[16px]"
        title={"Dice"}
        linkPath={Routes.public.DICE}
        icon={Dice}
      />
    </div>
  );
}
