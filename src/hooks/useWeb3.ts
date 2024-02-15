import useWallet from "@/stores/useWallet";
import { Maybe } from "@metamask/providers/dist/utils";
import { useRouter } from "next/navigation";
import BlastCoinFlip from "@/assets/abi/BlastCoinFlip.json";
import BlastDiceGame from "@/assets/abi/BlastDiceGame.json";
import Web3 from "web3";
import { GameResult } from "@/types/game";

export default function useWeb3() {
  const router = useRouter();
  const {
    setWalletConnected,
    setOnCoinFlipContract,
    setCoinFlipResult,
    setOnDiceGameContract,
    setDiceGameResult,
    setDiceGameResulValue,
  } = useWallet();

  const contractCoinflipABI = BlastCoinFlip.abi;
  const contractCoinflipAddress = process.env.NEXT_PUBLIC_COINFLIP_ADDR;
  const contractDiceGameABI = BlastDiceGame.abi;
  const contractDiceGameAddress = process.env.NEXT_PUBLIC_DICEGAME_ADDR;

  const watchForConnectedWallet = () => {
    if (window.ethereum !== undefined) {
      // Listen when disconnected
      window.ethereum.on("accountsChanged", (args) => {
        const accounts = args as string[]; // Type assertion
        // Check if the accounts array is empty, indicating disconnection
        if (accounts.length === 0) {
          // Handle the disconnection logic here
          setWalletConnected(false);
        } else {
          // Handle the case where accounts are switched or reconnected
          setWalletConnected(true);
        }
      });
    }
  };

  const getEtherAmountInWallet = async (): Promise<string | undefined> => {
    if (window.ethereum !== undefined) {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      if (accounts[0] !== null && accounts[0] !== undefined) {
        // Get the Ethereum balance
        const balance = await web3.eth.getBalance(accounts[0]);
        // Convert balance from Wei to Ether
        return web3.utils.fromWei(balance, "ether");
      }
    }
    return undefined;
  };

  const onConnectWallet = () => {
    if (window.ethereum !== undefined) {
      window.ethereum
        .request<string[]>({ method: "eth_requestAccounts" })
        .then((value: Maybe<string[]>) => {
          // Save wallet connected state
          if (value !== null && value !== undefined && value[0] !== undefined) {
            setWalletConnected(true);
          }
          // Auto add and change chain
          window.ethereum
            .request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: process.env.NEXT_PUBLIC_CHAIN_ID,
                  chainName: process.env.NEXT_PUBLIC_CHAIN_NAME,
                  rpcUrls: [process.env.NEXT_PUBLIC_CHAIN_RPC_URLS],
                  nativeCurrency: {
                    name: process.env.NEXT_PUBLIC_CHAIN_NATIVE_CURRENCY_NAME,
                    symbol:
                      process.env.NEXT_PUBLIC_CHAIN_NATIVE_CURRENCY_SYMBOL,
                    decimals: Number(
                      process.env.NEXT_PUBLIC_CHAIN_NATIVE_CURRENCY_DECIMALS
                    ),
                  },
                  blockExplorerUrls: [
                    process.env.NEXT_PUBLIC_CHAIN_BLOCK_EXPLORER_URLS,
                  ],
                },
              ],
            })
            .then((result: any) => {
              if (result === null) {
                console.log("Added Chain");
              } else {
                console.log("Error: ", result);
              }
            });
        });
    } else {
      console.log("MetaMask Not found");
    }
  };

  const callCoinflipbet = async (isHead: boolean, betAmount: string) => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    if (accounts[0] !== null && accounts[0] !== undefined) {
      const networkId = await web3.eth.net.getId();
      if (networkId === BigInt(process.env.NEXT_PUBLIC_CHAIN_ID!)) {
        // Instantiate the Contract
        const contract = new web3.eth.Contract(
          contractCoinflipABI,
          contractCoinflipAddress,
          {
            provider: process.env.NEXT_PUBLIC_PROVIDER_URLS,
          }
        );
        setCoinFlipResult(GameResult.Pending);
        setOnCoinFlipContract(true);
        const amount = web3.utils.toWei(betAmount, "ether"); // Convert amount to wei
        contract.methods
          .placeBet(isHead)
          .send({ from: accounts[0], value: amount, gas: "400000" })
          .on("receipt", (receipt) => {
            setOnCoinFlipContract(false);
            if (receipt.events !== undefined) {
              if (receipt.events.GameResult.returnValues.won === true) {
                setCoinFlipResult(GameResult.Win);
              } else {
                setCoinFlipResult(GameResult.Lose);
              }
            }
          })
          .on("error", (error: Error) => {
            setOnCoinFlipContract(false);
            console.error("Error:", error);
          })
          .catch((error) => {
            setOnCoinFlipContract(false);
            console.log("Catch Error: ", error);
          });
      }
    }
  };

  const callDiceGamebet = async (guess: string, betAmount: string) => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    if (accounts[0] !== null && accounts[0] !== undefined) {
      const networkId = await web3.eth.net.getId();
      if (networkId === BigInt(process.env.NEXT_PUBLIC_CHAIN_ID!)) {
        // Instantiate the Contract
        const contract = new web3.eth.Contract(
          contractDiceGameABI,
          contractDiceGameAddress,
          {
            provider: process.env.NEXT_PUBLIC_PROVIDER_URLS,
          }
        );
        setDiceGameResult(GameResult.Pending);
        setOnDiceGameContract(true);
        const amount = web3.utils.toWei(betAmount, "ether"); // Convert amount to wei
        contract.methods
          .placeBet(guess)
          .send({ from: accounts[0], value: amount, gas: "400000" })
          .on("receipt", (receipt) => {
            setOnDiceGameContract(false);
            console.log("DiceGame Receipt: ", receipt);
            if (receipt.events !== undefined) {
              if (receipt.events.GameResult.returnValues.won === true) {
                setDiceGameResult(GameResult.Win);
              } else {
                setDiceGameResult(GameResult.Lose);
              }
              if (receipt.events.GameResult.returnValues.result !== undefined) {
                setDiceGameResulValue(
                  String(receipt.events.GameResult.returnValues.result)
                );
              } else {
                setDiceGameResulValue("-");
              }
            }
          })
          .on("error", (error: Error) => {
            setOnDiceGameContract(false);
            console.error("Error:", error);
          })
          .catch((error) => {
            setOnDiceGameContract(false);
            console.log("Catch Error: ", error);
          });
      }
    }
  };

  return {
    watchForConnectedWallet,
    getEtherAmountInWallet,
    onConnectWallet,
    callCoinflipbet,
    callDiceGamebet,
  };
}
