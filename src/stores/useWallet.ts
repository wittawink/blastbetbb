import { GameResult } from "@/types/game";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseWallet {
  walletConnected: boolean;
  onCoinFlipContract: boolean;
  coinFlipResult: GameResult;
  onDiceGameContract: boolean;
  diceGameResult: GameResult;
  diceGameResultValue: string;
  setWalletConnected: (walletConnected: boolean) => void;
  setOnCoinFlipContract: (onCoinFlipContract: boolean) => void;
  setOnDiceGameContract: (onDiceGameContract: boolean) => void;
  setCoinFlipResult: (coinFlipResult: GameResult) => void;
  setDiceGameResult: (diceGameResult: GameResult) => void;
  setDiceGameResulValue: (diceGameResultValue: string) => void;
}

const useWallet = create<UseWallet>()(
  persist(
    (set, get) => ({
      walletConnected: false,
      onCoinFlipContract: false,
      coinFlipResult: GameResult.Pending,
      onDiceGameContract: false,
      diceGameResult: GameResult.Pending,
      diceGameResultValue: "-",
      setWalletConnected: (walletConnected: boolean) => {
        set({ walletConnected });
      },
      setOnCoinFlipContract: (onCoinFlipContract: boolean) => {
        set({ onCoinFlipContract });
      },
      setCoinFlipResult: (coinFlipResult: GameResult) => {
        set({ coinFlipResult });
      },
      setOnDiceGameContract: (onDiceGameContract: boolean) => {
        set({ onDiceGameContract });
      },
      setDiceGameResult: (diceGameResult: GameResult) => {
        set({ diceGameResult });
      },
      setDiceGameResulValue: (diceGameResultValue: string) => {
        set({ diceGameResultValue });
      },
    }),
    {
      name: "useWallet",
      partialize: (state) => ({
        walletConnected: state.walletConnected,
        onCoinFlipContract: state.onCoinFlipContract,
        coinFlipResult: state.coinFlipResult,
        onDiceGameContract: state.onDiceGameContract,
        diceGameResult: state.diceGameResult,
        diceGameResultValue: state.diceGameResultValue,
      }),
      skipHydration: true,
    }
  )
);

export default useWallet;
