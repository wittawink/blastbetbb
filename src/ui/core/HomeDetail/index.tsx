"use client";
import BaseBanner from "@/ui/base/BaseBanner";
import BaseGradientView from "@/ui/base/BaseGradientView";
import { Routes } from "@/config/routes";
import Image from "next/image";
import PoolTohether from "@/assets/home/poolTogether.webp";
import Rank from "@/assets/home/rank.webp";
import Features from "@/assets/home/features.webp";

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
        <BaseBanner
          title={"Rock Paper Scissors"}
          subTitle={"Coming soon..."}
          linkPath={"#"}
        ></BaseBanner>
        <BaseBanner
          title={"Slots"}
          subTitle={"Coming soon..."}
          linkPath={"#"}
        ></BaseBanner>
        <BaseBanner
          title={"Mines"}
          subTitle={"Coming soon..."}
          linkPath={"#"}
        ></BaseBanner>
        <BaseBanner
          title={"Plinko"}
          subTitle={"Coming soon..."}
          linkPath={"#"}
        ></BaseBanner>
      </div>
      <BaseGradientView
        className="h-[240px] flex items-center justify-center mt-16"
        fromColor={"from-[#11140C]"}
        toColor={"to-[#75835D]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-center font-geomGraphic text-[60px] text-[#FCFDC7] font-semibold">
          Our Niche
        </div>
      </BaseGradientView>
      <div className="grid grid-rows-1 grid-cols-3 gap-4  w-full mt-8">
        <BaseBanner
          title={"Fair"}
          subTitle={"100% of Betting Profits (House-edge) Returned to Users"}
          linkPath={"#"}
          className={"!h-[380px] !bg-[#FCFC03]"}
          titleColor={"!text-black"}
          subTitleColor={"!text-black"}
        ></BaseBanner>
        <BaseBanner
          title={"Unique"}
          subTitle={"Featuring PoolTogether, Ranked Matchmaking Bets, and More"}
          linkPath={"#"}
          className={"!h-[380px] !bg-[#FCFC03]"}
          titleColor={"!text-black"}
          subTitleColor={"!text-black"}
        ></BaseBanner>
        <BaseBanner
          title={"Strongly-Supported"}
          linkPath={"#"}
          subTitle={
            "Powered by the Blast Ecosystem, Encouraging BLAST and USDB Usage for Mutual Benefits"
          }
          className={"!h-[380px] !bg-[#FCFC03]"}
          titleColor={"!text-black"}
          subTitleColor={"!text-black"}
        ></BaseBanner>
      </div>
      <BaseGradientView
        className="h-[240px] flex items-center justify-center  mt-16"
        fromColor={"from-[#75835D]"}
        toColor={"to-[#C3D4A5]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-center font-geomGraphic text-[60px] text-[#11140C] font-semibold">
          Unique features
        </div>
      </BaseGradientView>
      <BaseGradientView
        className="h-[240px] flex flex-row items-center justify-between  mt-8"
        fromColor={"from-[#FCFC03]"}
        toColor={"to-[#FCFC03]"}
        borderColor={"border-[#404833]"}
      >
        <div className="flex flex-col p-12">
          <div className="text-4xl font-geomGraphic text-[#11140C] font-semibold">
            PoolTogether
          </div>
          <div className="text-xl font-geomGraphic text-[#11140C] font-semibold pt-10">
            For those who want to be the house, enter a specific pool to stake
            and become the house. Stakers of PoolTogether will be rewarded with
            a portion of the gambling winnings, points in the system to exchange
            for BB Tokens, and Blast Points.
          </div>
        </div>
        <Image
          src={PoolTohether}
          alt="pool-togather"
          className="mx-12 w-[200px] h-[200px] rounded-full"
        ></Image>
      </BaseGradientView>
      <BaseGradientView
        className="h-[240px] flex flex-row items-center justify-between  mt-8"
        fromColor={"from-[#FCFC03]"}
        toColor={"to-[#FCFC03]"}
        borderColor={"border-[#404833]"}
      >
        <div className="flex flex-col p-12">
          <div className="text-4xl font-geomGraphic text-[#11140C] font-semibold">
            Ranking System
          </div>
          <div className="text-xl font-geomGraphic text-[#11140C] font-semibold pt-10">
            Advanced matching and ranking system for competitive games and
            tournaments to ensure fair and challenging gameplay. Bonus BB tokens
            for ranking, with a leaderboard to rank players. Each season,
            top-ranked players receive BB Tokens. Conditions for ranking include
            staking a certain amount of our coin or BLAST or USDB.
          </div>
        </div>
        <Image
          src={Rank}
          alt="rank"
          className="mx-12 w-[200px] h-[200px] rounded-full"
        ></Image>
      </BaseGradientView>
      <BaseGradientView
        className="h-[240px] flex flex-row items-center justify-between  mt-8"
        fromColor={"from-[#FCFC03]"}
        toColor={"to-[#FCFC03]"}
        borderColor={"border-[#404833]"}
      >
        <div className="flex flex-col p-12">
          <div className="text-4xl font-geomGraphic text-[#11140C] font-semibold">
            Other Features
          </div>
          <div className="text-xl font-geomGraphic text-[#11140C] font-semibold pt-10">
            Other features include Support various crypto assets, Multiple
            languages, Staking to earn.
          </div>
        </div>
        <Image
          src={Features}
          alt="features"
          className="mx-12 w-[200px] h-[200px] rounded-full"
        ></Image>
      </BaseGradientView>

      <BaseGradientView
        className="h-[240px] flex items-center justify-center  mt-16"
        fromColor={"from-[#75835D]"}
        toColor={"to-[#C3D4A5]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-center font-geomGraphic text-[60px] text-[#11140C] font-semibold">
          Roadmap
        </div>
      </BaseGradientView>
      <BaseGradientView
        className="h-[120px] flex flex-col items-left justify-center  mt-8 p-16"
        fromColor={"from-[#FCFC03]"}
        toColor={"to-[#FCFC03]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-3xl font-geomGraphic text-[#11140C] font-semibold text-left">
          Phase 0: Initial Launch and Testing
        </div>
      </BaseGradientView>
      <BaseGradientView
        className="h-[120px] flex flex-col items-left justify-center  mt-8 p-16"
        fromColor={"from-[#FCFC03]"}
        toColor={"to-[#FCFC03]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-3xl font-geomGraphic text-[#11140C] font-semibold text-left">
          Phase 0.5: Add More Games to the Project
        </div>
      </BaseGradientView>

      <BaseGradientView
        className="h-[120px] flex flex-col items-left justify-center  mt-8 p-16"
        fromColor={"from-[#FCFC03]"}
        toColor={"to-[#FCFC03]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-3xl font-geomGraphic text-[#11140C] font-semibold text-left">
          Phase 1: Core Enhancements and Global Accessibility
        </div>
      </BaseGradientView>

      <BaseGradientView
        className="h-[120px] flex flex-col items-left justify-center  mt-8 p-16"
        fromColor={"from-[#FCFC03]"}
        toColor={"to-[#FCFC03]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-3xl font-geomGraphic text-[#11140C] font-semibold text-left">
          Phase 2: Advanced Betting Features and Community Engagement
        </div>
      </BaseGradientView>

      <BaseGradientView
        className="h-[120px] flex flex-col items-left justify-center  mt-8 p-16"
        fromColor={"from-[#FCFC03]"}
        toColor={"to-[#FCFC03]"}
        borderColor={"border-[#404833]"}
      >
        <div className="text-3xl font-geomGraphic text-[#11140C] font-semibold text-left">
          Phase 3: Ecosystem Expansion and User Engagement
        </div>
      </BaseGradientView>
    </main>
  );
}
