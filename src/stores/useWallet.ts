import { GameResult } from "@/types/game";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseWallet {
  walletConnected: boolean;
  onCoinFlipContract: boolean;
  coinFlipResult: GameResult;
  diceGameResult: GameResult;
  setWalletConnected: (walletConnected: boolean) => void;
  setOnCoinFlipContract: (onCoinFlipContract: boolean) => void;
  setCoinFlipResult: (coinFlipResult: GameResult) => void;
  setDiceGameResult: (diceGameResult: GameResult) => void;
}

const useWallet = create<UseWallet>()(
  persist(
    (set, get) => ({
      walletConnected: false,
      onCoinFlipContract: false,
      coinFlipResult: GameResult.Pending,
      diceGameResult: GameResult.Pending,
      setWalletConnected: (walletConnected: boolean) => {
        set({ walletConnected });
      },
      setOnCoinFlipContract: (onCoinFlipContract: boolean) => {
        set({ onCoinFlipContract });
      },
      setCoinFlipResult: (coinFlipResult: GameResult) => {
        set({ coinFlipResult });
      },
      setDiceGameResult: (diceGameResult: GameResult) => {
        set({ diceGameResult });
      },
    }),
    {
      name: "useWallet",
      partialize: (state) => ({
        walletConnected: state.walletConnected,
        onCoinFlipContract: state.onCoinFlipContract,
        coinFlipResult: state.coinFlipResult,
        diceGameResult: state.diceGameResult,
      }),
      skipHydration: true,
    }
  )
);

export default useWallet;
