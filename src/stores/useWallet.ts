import { CoinFlipResult } from "@/types/coinflip";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseWallet {
  walletConnected: boolean;
  onCoinFlipContract: boolean;
  coinFlipResult: CoinFlipResult;
  setWalletConnected: (walletConnected: boolean) => void;
  setOnCoinFlipContract: (onCoinFlipContract: boolean) => void;
  setCoinFlipResult: (coinFlipResult: CoinFlipResult) => void;
}

const useWallet = create<UseWallet>()(
  persist(
    (set, get) => ({
      walletConnected: false,
      onCoinFlipContract: false,
      coinFlipResult: CoinFlipResult.Pending,
      setWalletConnected: (walletConnected: boolean) => {
        set({ walletConnected });
      },
      setOnCoinFlipContract: (onCoinFlipContract: boolean) => {
        set({ onCoinFlipContract });
      },
      setCoinFlipResult: (coinFlipResult: CoinFlipResult) => {
        set({ coinFlipResult });
      },
    }),
    {
      name: "useWallet",
      partialize: (state) => ({
        walletConnected: state.walletConnected,
        onCoinFlipContract: state.onCoinFlipContract,
        coinFlipResult: state.coinFlipResult,
      }),
      skipHydration: true,
    }
  )
);

export default useWallet;
