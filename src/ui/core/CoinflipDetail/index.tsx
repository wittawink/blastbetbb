"use client";
import BaseInput from "@/ui/base/BaseInput";
import BaseButton from "@/ui/base/BaseButton";
import useWeb3 from "@/hooks/useWeb3";
import { useEffect, useState } from "react";
import BaseToggleSwitch from "@/ui/base/BaseToggleSwitch";
import BaseInputSlideBar from "@/ui/base/BaseInputSlideBar";
import useWallet from "@/stores/useWallet";
import Head from "@/assets/Icon/coinflip/head.png";
import Tails from "@/assets/Icon/coinflip/tails.png";
import Image from "next/image";
import cn from "@/lib/cn";
import customInput from "@/styles/custom-input.module.css";
import { CoinFlipResult } from "@/types/coinflip";

export default function CoinflipDetail() {
  const { getEtherAmountInWallet, callCoinflipbet } = useWeb3();
  const {
    walletConnected,
    onCoinFlipContract,
    coinFlipResult,
    setCoinFlipResult,
  } = useWallet();
  const [selectHead, setSelectHead] = useState<boolean>(true);
  const [wager, setWager] = useState<string>("0.0001");
  const [maxWager, setMaxWager] = useState<number>(0.0001);

  useEffect(() => {
    useWallet.persist.rehydrate();
    handleGetEthAmount();
  }, []);

  const handleGetEthAmount = async () => {
    const ethAmount = await getEtherAmountInWallet();
    const maxBetAmount = Number(process.env.NEXT_PUBLIC_COINFLIP_MAX_BET!);
    if (ethAmount !== undefined) {
      const amount = Number(ethAmount);
      if (amount > maxBetAmount) {
        setMaxWager(maxBetAmount);
      } else {
        setMaxWager(amount);
      }
    } else {
      setMaxWager(maxBetAmount);
    }
  };

  const onChangeToggleSwitch = (isHead: boolean) => {
    setCoinFlipResult(CoinFlipResult.Pending);
    setSelectHead(isHead);
  };

  const onChangeWager = (value: string) => {
    setWager(value);
  };

  const handleOnClickBet = () => {
    if (walletConnected) {
      callCoinflipbet(selectHead, wager);
    }
  };

  const calculateMaxPayout = (): string => {
    return ((Number(wager) * 2 * 99) / 100).toFixed(6);
  };

  const getBorderOnCoinFlipState = () => {
    switch (coinFlipResult) {
      case CoinFlipResult.Win:
        return "border-[#00CC00]";
      case CoinFlipResult.Lose:
        return "border-[#FF3333]";
      case CoinFlipResult.Pending:
        return "border-[#404833]";
      default:
        return "border-[#404833]";
    }
  };
  return (
    <main className="flex flex-row items-center justify-center">
      <div className="w-2/6 h-[867px] flex flex-col border-[2px] border-[#404833] rounded-[10px] p-[16px]">
        <BaseInputSlideBar
          title={"Wager"}
          value={wager}
          min={Number(process.env.NEXT_PUBLIC_COINFLIP_MIN_BET!)}
          max={maxWager}
          step={Number(process.env.NEXT_PUBLIC_COINFLIP_MIN_BET!)}
          handleOnSlideBar={onChangeWager}
        ></BaseInputSlideBar>
        <div className="flex flex-row gap-4 mt-8">
          <BaseInput
            title={"Total Wager"}
            value={wager}
            className="w-1/2"
          ></BaseInput>
          <BaseInput
            title={"Max Payout"}
            value={calculateMaxPayout()}
            className="w-1/2"
          ></BaseInput>
        </div>
        <div className="flex justify-center mt-8">
          <BaseButton
            className="h-14 w-60 text-xl font-bold font-geomGraphic bg-[#FCFC03] rounded-[10px] relative overflow-hidden text-black drop-shadow-[0_0_5px_rgba(252,252,3,1)]"
            onClick={handleOnClickBet}
          >
            Bet
          </BaseButton>
        </div>
      </div>
      <div className="ml-[16px] w-4/6 flex flex-col gap-4">
        <div
          className={cn(
            "border-[2px] rounded-[10px] flex items-center justify-center",
            getBorderOnCoinFlipState()
          )}
        >
          <div
            className={cn(
              customInput.flipCard,
              "w-[500px] h-[500px] m-[86px] overflow-hidden"
            )}
          >
            <div
              className={cn(
                "relative w-full h-full",
                onCoinFlipContract
                  ? customInput.flipCoinInnerSpin
                  : customInput.flipCoinInner,
                selectHead ? "" : customInput.flipCoinInnerTransform
              )}
            >
              <Image
                src={Head}
                alt={"head"}
                className={cn(customInput.flipCardFront, "absolute")} //"absolute", selectHead ? "" : "hidden"
              />
              <Image
                src={Tails}
                alt={"tail"}
                className={cn(customInput.flipCardBack, "absolute")} //"absolute", selectHead ? "hidden" : ""
              />
            </div>
          </div>
        </div>
        <div className="h-[184] border-[2px] border-[#404833] rounded-[10px] flex items-center justify-center">
          <BaseToggleSwitch
            className={"m-[32px]"}
            handleOnChangeSwitch={onChangeToggleSwitch}
          ></BaseToggleSwitch>
        </div>
      </div>
    </main>
  );
}
