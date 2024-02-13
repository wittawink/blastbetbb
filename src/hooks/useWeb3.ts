import useWallet from "@/stores/useWallet";
import { Maybe } from "@metamask/providers/dist/utils";
import { useRouter } from "next/navigation";
import BlastHiRoll from "@/assets/abi/BlastHiRoll.json";
import Web3 from "web3";

export default function useWeb3() {
  const router = useRouter();
  const { setWalletConnected } = useWallet();

  const contractABI = BlastHiRoll.abi;
  const contractAddress = "0x4c36198ba8b0809a5237c8240c2ffeee0c5bf2ec";

  const watchForConnectedWallet = () => {
    if (window.ethereum !== undefined) {
      // Listen when disconnected
      window.ethereum.on("accountsChanged", (args) => {
        const accounts = args as string[]; // Type assertion
        // Check if the accounts array is empty, indicating disconnection
        if (accounts.length === 0) {
          console.log("MetaMask is disconnected");
          setWalletConnected(false);
          // Handle the disconnection logic here
        } else {
          // Handle the case where accounts are switched or reconnected
          console.log("MetaMask is connected with account:", accounts[0]);
        }
      });
    }
  };

  const onConnectWallet = () => {
    if (window.ethereum !== undefined) {
      window.ethereum
        .request<string[]>({ method: "eth_requestAccounts" })
        .then((value: Maybe<string[]>) => {
          // Save wallet connected state
          console.log("Accounts", value);
          if (value !== null && value !== undefined && value[0] !== undefined) {
            setWalletConnected(true);
          }

          // Auto change chain
          window.ethereum
            .request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xA0C71FD",
                  chainName: "Blast Sepolia",
                  rpcUrls: ["https://sepolia.blast.io"],
                  nativeCurrency: {
                    name: "ETH",
                    symbol: "ETH",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://testnet.blastscan.io"],
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

  const callGetGreeting = () => {
    const web3 = new Web3(window.ethereum);
    web3.eth.net.getId().then((networkId: bigint) => {
      console.log("ChainId: ", networkId);
      console.log("Chain Correct: ", networkId === BigInt(0xa0c71fd));
      if (networkId === BigInt(0xa0c71fd)) {
        // Instantiate the Contract
        const contract = new web3.eth.Contract(contractABI, contractAddress, {
          provider: "https://sepolia.blast.io",
        });

        // Interact with the Contract
        // Call a read-only function
        contract.methods
          .getGreeting()
          .call()
          .then((result: any) => {
            console.log("Result: ", result);
          })
          .catch((error: Error) => {
            console.error("Error: ", error);
          });

        // Send a transaction to a state-changing function
        // contract.methods
        //   .setGreeting("Hello from other wallet address!! Test Set")
        //   .send({ from: accounts[0] })
        //   .on("transactionHash", (hash: string) => {
        //     console.log("Transaction hash:", hash);
        //   })
        //   .on("confirmation", (confirmationNumber: number, receipt: any) => {
        //     console.log("Confirmation number:", confirmationNumber);
        //     console.log("Receipt:", receipt);
        //   })
        //   .on("error", (error: Error) => {https://docs.metamask.io/wallet/reference/wallet_addethereumchain/
        //     console.error("Error:", error);
        //   });
      }
    });
  };

  return {
    watchForConnectedWallet,
    onConnectWallet,
    callGetGreeting,
  };
}
