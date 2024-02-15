"use client";
import useWeb3 from "@/hooks/useWeb3";
import cn from "@/lib/cn";
import useWallet from "@/stores/useWallet";
import { GameResult } from "@/types/game";
import BaseButton from "@/ui/base/BaseButton";
import BaseInput from "@/ui/base/BaseInput";
import BaseInputSlideBar from "@/ui/base/BaseInputSlideBar";
import customInput from "@/styles/custom-input.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DiceDetail() {
  const { getEtherAmountInWallet, callCoinflipbet } = useWeb3();
  const {
    walletConnected,
    onCoinFlipContract,
    coinFlipResult,
    setCoinFlipResult,
  } = useWallet();
  const [wager, setWager] = useState<string>("0.0001");
  const [maxWager, setMaxWager] = useState<number>(0.0001);
  const [roll, setRoll] = useState<string>("50");
  const [multiplier, setMultiplier] = useState<string>("1.98");
  const [winChance, setWinChance] = useState<string>("50");

  useEffect(() => {
    useWallet.persist.rehydrate();
    handleGetEthAmount();
  }, []);

  const handleGetEthAmount = async () => {
    const ethAmount = await getEtherAmountInWallet();
    const maxBetAmount = Number(process.env.NEXT_PUBLIC_DICEGAME_MAX_BET!);
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

  const onChangeWager = (value: string) => {
    setWager(value);
  };

  const onChangeRoll = (value: string) => {
    setRoll(value);
    const newWinChance = calculateWinChance(value);
    calculateMultiplier(newWinChance);
  };

  const handleOnClickBet = () => {
    if (walletConnected) {
      //callCoinflipbet(selectHead, wager);
    }
  };

  const calculateMaxPayout = (): string => {
    return (Number(wager) * Number(multiplier)).toFixed(6);
  };

  const calculateWinChance = (value: string): string => {
    const newWinChance = String(100 - Number(value));
    setWinChance(newWinChance);
    return newWinChance;
  };

  const calculateMultiplier = (value: string) => {
    setMultiplier((99 / Number(value)).toFixed(4));
  };

  const getBorderOnDiceGameState = () => {
    switch (coinFlipResult) {
      case GameResult.Win:
        return "border-[#00CC00]";
      case GameResult.Lose:
        return "border-[#FF3333]";
      case GameResult.Pending:
        return "border-[#404833]";
      default:
        return "border-[#404833]";
    }
  };
  return (
    <main className="flex flex-row items-center justify-center">
      <div className="w-2/6 h-[866px] flex flex-col border-[2px] border-[#404833] rounded-[10px] p-[16px]">
        <BaseInputSlideBar
          title={"Wager"}
          value={wager}
          min={Number(process.env.NEXT_PUBLIC_DICEGAME_MIN_BET!)}
          max={maxWager}
          step={Number(process.env.NEXT_PUBLIC_DICEGAME_MIN_BET!)}
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
            getBorderOnDiceGameState()
          )}
        >
          <div
            className={cn(
              customInput.flipCard,
              "w-[500px] h-[500px] m-[86px] overflow-hidden"
            )}
          >
            <BaseInputSlideBar
              title={"Dice"}
              value={roll}
              min={Number(process.env.NEXT_PUBLIC_DICEGAME_MIN_ROLL!)}
              max={Number(process.env.NEXT_PUBLIC_DICEGAME_MAX_ROLL!)}
              step={Number(process.env.NEXT_PUBLIC_DICEGAME_MIN_ROLL!)}
              handleOnSlideBar={onChangeRoll}
            ></BaseInputSlideBar>
          </div>
        </div>
        <div className="h-[184] border-[2px] border-[#404833] rounded-[10px] flex items-center justify-center gap-4 p-10">
          <BaseInput
            title={"Multiplier"}
            value={multiplier}
            className="w-1/3"
          ></BaseInput>
          <BaseInput
            title={"Roll Over"}
            value={roll}
            className="w-1/3"
          ></BaseInput>
          <BaseInput
            title={"Win Chance"}
            value={winChance}
            className="w-1/3"
          ></BaseInput>
        </div>
      </div>
    </main>
  );
}
