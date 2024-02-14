import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseWallet {
  walletConnected: boolean;
  onCoinFlipContract: boolean;
  setWalletConnected: (walletConnected: boolean) => void;
  setOnCoinFlipContract: (walletConnected: boolean) => void;
}

const useWallet = create<UseWallet>()(
  persist(
    (set, get) => ({
      walletConnected: false,
      onCoinFlipContract: false,
      setWalletConnected: (walletConnected: boolean) => {
        set({ walletConnected });
      },
      setOnCoinFlipContract: (onCoinFlipContract: boolean) => {
        set({ onCoinFlipContract });
      },
    }),
    {
      name: "useWallet",
      partialize: (state) => ({
        walletConnected: state.walletConnected,
        onCoinFlipContract: state.onCoinFlipContract,
      }),
      skipHydration: true,
    }
  )
);

export default useWallet;
