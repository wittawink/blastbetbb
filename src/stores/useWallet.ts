import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseWallet {
  walletConnected: boolean;
  setWalletConnected: (walletConnected: boolean) => void;
}

const useWallet = create<UseWallet>()(
  persist(
    (set, get) => ({
      walletConnected: false,
      setWalletConnected: (walletConnected: boolean) => {
        set({ walletConnected });
      },
    }),
    {
      name: "useWallet",
      partialize: (state) => ({
        walletConnected: state.walletConnected,
      }),
      skipHydration: true,
    }
  )
);

export default useWallet;
