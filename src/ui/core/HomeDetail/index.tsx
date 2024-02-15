"use client";
import BaseBanner from "@/ui/base/BaseBanner";
import BaseGradientView from "@/ui/base/BaseGradientView";
import { Routes } from "@/config/routes";

export default function HomeDetail() {
  return (
    <main className="flex flex-col items-center justify-center">
      <BaseGradientView
        className="h-[240px] flex items-center justify-center"
        fromColor={"from-[#11140C]"}
        toColor={"to-[#75835D]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-center font-geomGraphic text-[60px] text-[#FCFDC7] font-semibold">
          Feel the BLAST of victory with BLAST BET!
        </div>
      </BaseGradientView>
      <div className="grid grid-rows-2 grid-cols-3 gap-4 w-full mt-[16px]">
        <BaseBanner
          title={"Coinflip"}
          linkPath={Routes.public.COIN_FLIP}
        ></BaseBanner>
        <BaseBanner title={"Dice"} linkPath={Routes.public.DICE}></BaseBanner>
        <BaseBanner title={"Coming soon"} linkPath={"#"}></BaseBanner>
        <BaseBanner title={"Coming soon"} linkPath={"#"}></BaseBanner>
        <BaseBanner title={"Coming soon"} linkPath={"#"}></BaseBanner>
        <BaseBanner title={"Coming soon"} linkPath={"#"}></BaseBanner>
      </div>
    </main>
  );
}
