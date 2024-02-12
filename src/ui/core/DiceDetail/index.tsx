"use client";
import LayoutFooter from "@/ui/layout/LayoutFooter";
import BaseInput from "@/ui/base/BaseInput";
import BaseBanner from "@/ui/base/BaseBanner";
import BaseButton from "@/ui/base/BaseButton";
import useWeb3 from "@/hooks/useWeb3";
import { useEffect } from "react";

export default function DiceDetail() {
  const { callGetGreeting } = useWeb3();
  return (
    <main className="flex flex-col items-center p-24">
      <BaseButton
        className="bg-[#FF0000] w-[100px] h-[100px] text-[#FFFFFF]"
        onClick={callGetGreeting}
      >
        Get Greeting
      </BaseButton>
      <BaseBanner text={"DICE"}></BaseBanner>
      <BaseInput text={"Total Wager"}></BaseInput>
      <BaseInput text={"Max Payout"}></BaseInput>
      <LayoutFooter className="mt-[500px]" />
    </main>
  );
}
