"use client";
import BaseButton from "@/ui/base/BaseButton";
import BaseProfile from "@/ui/base/BaseProfile";
import React, { useEffect } from "react";
import useWeb3 from "@/hooks/useWeb3";
import useWallet from "@/stores/useWallet";
import customInput from "@/styles/custom-input.module.css";
import cn from "@/lib/cn";

interface LayoutHeaderProps {
  text: string;
}

export default function LayoutHeader({ text }: LayoutHeaderProps) {
  const { watchForConnectedWallet, onConnectWallet } = useWeb3();
  const { walletConnected } = useWallet();
  useEffect(() => {
    watchForConnectedWallet();
    useWallet.persist.rehydrate();
  }, []);
  return (
    <div className="px-[32px] py-[16px] flex flex-row items-center sticky top-0 bg-black z-50">
      <BaseProfile profileName={text} />
      <div className="grow" />
      <BaseButton
        className={cn(
          "h-[80px] w-[450px] text-[28px] font-bold bg-[#FCFC03] rounded-[20px] relative overflow-hidden transition-all duration-1000 text-black",
          customInput.connectWallet
        )}
        type="button"
        onClick={onConnectWallet}
      >
        {walletConnected ? "Connected" : "Connect Metamask Wallet"}
      </BaseButton>
    </div>
  );
}
