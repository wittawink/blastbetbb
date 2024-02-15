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
      <BaseGradientView
        className="h-[240px] flex items-center justify-center mt-8 "
        fromColor={"from-[#75835D]"}
        toColor={"to-[#C3D4A5]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-center font-geomGraphic text-[60px] text-[#11140C] font-semibold">
          Our Niche!!
        </div>
      </BaseGradientView>
      <div className="grid grid-rows-2 grid-cols-3 gap-4  w-full mt-[50px]">
        <BaseBanner
          title={"Fair"}
          text={"100% of Betting Profits (House-edge) Returned to Users"}
          linkPath={"#"}
          className={"!h-[380px] !bg-[#FCFC03]"}
          titleColor={"!text-black"}
          subtitleColor={"!text-black"}
        ></BaseBanner>
        <BaseBanner
          title={"Unique"}
          text={"Featuring PoolTogether, Ranked Matchmaking Bets, and More"}
          linkPath={"#"}
          className={"!h-[380px] !bg-[#FCFC03]"}
          titleColor={"!text-black"}
          subtitleColor={"!text-black"}
        ></BaseBanner>
        <BaseBanner
          title={"Strongly-Supported"}
          linkPath={"#"}
          text={
            "Powered by the Blast Ecosystem, Encouraging BLAST and USDB Usage for Mutual Benefits"
          }
          className={"!h-[380px] !bg-[#FCFC03]"}
          titleColor={"!text-black"}
          subtitleColor={"!text-black"}
        ></BaseBanner>
      </div>
      <BaseGradientView
        className="h-[240px] flex items-center justify-center"
        fromColor={"from-[#75835D]"}
        toColor={"to-[#C3D4A5]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-center font-geomGraphic text-[60px] text-[#11140C] font-semibold">
          Our Niche!!
        </div>
      </BaseGradientView>
    </main>
  );
}
