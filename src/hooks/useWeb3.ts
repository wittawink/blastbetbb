import useWallet from "@/stores/useWallet";
import { Maybe } from "@metamask/providers/dist/utils";
import { useRouter } from "next/navigation";
import BlastHiRoll from "@/assets/abi/BlastHiRoll.json";
import Web3 from "web3";

export default function useWeb3() {
  const router = useRouter();
  const { setWalletConnected } = useWallet();

  const contractCoinflipABI = BlastHiRoll.abi;
  const contractCoinflipAddress = process.env.NEXT_PUBLIC_COINFLIP_ADDR;

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
          // Auto change chain
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
      web3.eth.net.getId().then(async (networkId: bigint) => {
        if (networkId === BigInt(process.env.NEXT_PUBLIC_CHAIN_ID!)) {
          // Instantiate the Contract
          const contract = new web3.eth.Contract(
            contractCoinflipABI,
            contractCoinflipAddress,
            {
              provider: process.env.NEXT_PUBLIC_PROVIDER_URLS,
            }
          );
          const amount = web3.utils.toWei(betAmount, "ether"); // Convert amount to wei

          contract.methods
            .placeBet(isHead)
            .send({ from: accounts[0], value: amount, gas: "400000" })
            .on("transactionHash", (hash: string) => {
              console.log("Transaction hash:", hash);
            })
            .on("receipt", (receipt) => {
              console.log("On Receipt: ", receipt);
              if (receipt.events !== undefined) {
                console.log("GameResultEvent: ", receipt.events.GameResult);
                console.log(
                  "GameResultReturnValue: ",
                  receipt.events.GameResult.returnValues
                );
                console.log(
                  "GameResultReturnValueWon: ",
                  receipt.events.GameResult.returnValues.won
                );

                if (receipt.events.GameResult.returnValues.won === true) {
                  contract.methods
                    .checkRewardBalance()
                    .call()
                    .then((result: any) => {
                      console.log("Result checkRewardBalance: ", result);
                    })
                    .catch((error: Error) => {
                      console.error("Error checkRewardBalance: ", error);
                    });
                  // contract.methods
                  //   .withdrawReward()
                  //   .call()
                  //   .then((result: any) => {
                  //     console.log("Result withdrawReward: ", result);
                  //   })
                  //   .catch((error: Error) => {
                  //     console.error("Error withdrawReward: ", error);
                  //   });
                }
              }
            })
            .on("error", (error: Error) => {
              //docs.metamask.io/wallet/reference/wallet_addethereumchain/
              console.error("Error:", error);
            });
        }
      });
    }
  };

  return {
    watchForConnectedWallet,
    getEtherAmountInWallet,
    onConnectWallet,
    callCoinflipbet,
  };
}
