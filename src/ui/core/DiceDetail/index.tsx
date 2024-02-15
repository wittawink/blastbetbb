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
import Dice from "@/assets/Icon/dice.svg";
import { useState, useEffect } from "react";
import BaseSlideBar from "@/ui/base/BaseSlideBar";

export default function DiceDetail() {
  const { getEtherAmountInWallet, callDiceGamebet } = useWeb3();
  const {
    walletConnected,
    onDiceGameContract,
    diceGameResult,
    diceGameResultValue,
    setDiceGameResult,
    setDiceGameResulValue,
  } = useWallet();
  const [wager, setWager] = useState<string>(
    process.env.NEXT_PUBLIC_DICEGAME_MIN_BET!
  );
  const [maxWager, setMaxWager] = useState<number>(
    Number(process.env.NEXT_PUBLIC_DICEGAME_MIN_BET!)
  );
  const [roll, setRoll] = useState<string>("50");
  const [multiplier, setMultiplier] = useState<string>("1.9800");
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

  const onChangeRoll = (value: string) => {
    setDiceGameResult(GameResult.Pending);
    setDiceGameResulValue("-");
    setRoll(value);
    const newWinChance = calculateWinChance(value);
    calculateMultiplier(newWinChance);
  };

  const onChangeWager = (value: string) => {
    setDiceGameResult(GameResult.Pending);
    setDiceGameResulValue("-");
    setWager(value);
  };

  const handleOnClickBet = () => {
    if (walletConnected) {
      callDiceGamebet(roll, wager);
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
    switch (diceGameResult) {
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
          step={Number(process.env.NEXT_PUBLIC_GAME_BET_STEP!)}
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
        <div className="border-[#404833] border-[2px] rounded-[10px] flex items-center justify-center">
          <div className={cn("w-full h-[580px] m-[46px]")}>
            <div className=" flex justify-end">
              <div
                className={cn(
                  "border-[2px] p-3 rounded-[10px] font-geomGraphic text-[20px]",
                  getBorderOnDiceGameState()
                )}
              >
                {diceGameResultValue}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                className={cn(
                  "w-[450px] h-[450px] rounded-[70px] p-4 bg-[#9BA885] mb-10",
                  onDiceGameContract ? customInput.blink : ""
                )}
                src={Dice}
                alt="dice-icon"
              />
              <BaseSlideBar
                title={"Dice"}
                value={roll}
                min={Number(process.env.NEXT_PUBLIC_DICEGAME_MIN_ROLL!)}
                max={Number(process.env.NEXT_PUBLIC_DICEGAME_MAX_ROLL!)}
                step={Number(process.env.NEXT_PUBLIC_DICEGAME_MIN_ROLL!)}
                handleOnSlideBar={onChangeRoll}
              />
            </div>
          </div>
        </div>
        <div className="h-[184] border-[2px] border-[#404833] rounded-[10px] flex items-center justify-center gap-4 p-10">
          <BaseInput
            title={"Multiplier"}
            value={multiplier}
            className="w-1/3"
          />
          <BaseInput title={"Roll Over"} value={roll} className="w-1/3" />
          <BaseInput title={"Win Chance"} value={winChance} className="w-1/3" />
        </div>
      </div>
    </main>
  );
}
