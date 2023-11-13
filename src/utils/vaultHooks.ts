import { Address } from "viem";
import { vaultAbi } from "./vaultAbi";
import {
  erc20ABI,
  useAccount,
  useBalance,
  useContractRead,
  usePrepareContractWrite,
} from "wagmi";
const VAULT_ADDRESS = "0x941F9ccF2443f77912A55d642E9e64BBaEAEaA0f" as Address;
const WANT_ADDRESS = "0x2C9E188d512f9d1139BA4AB8A6A6651482Bb3709" as Address;

export const useDepositConfig = (amount: string) => {
  return usePrepareContractWrite({
    abi: vaultAbi,
    address: VAULT_ADDRESS,
    functionName: "deposit",
    args: [BigInt(Number(amount) * 1e18)],
  });
};

export const useWithdrawConfig = (amount: string) => {
  return usePrepareContractWrite({
    abi: vaultAbi,
    address: VAULT_ADDRESS,
    functionName: "withdraw",
    args: [BigInt(Number(amount) * 1e18)],
  });
};

export const useApproveConfig = (amount: string) => {
  return usePrepareContractWrite({
    abi: erc20ABI,
    address: WANT_ADDRESS,
    functionName: "approve",
    args: [VAULT_ADDRESS, BigInt(Number(amount) * 1e18)],
  });
};

export const useAllowance = () => {
  const { address } = useAccount();
  return useContractRead({
    address: WANT_ADDRESS,
    abi: erc20ABI,
    functionName: "allowance",
    enabled: !!address,
    args: [address as Address, VAULT_ADDRESS],
  });
};

export const useAuraRatio = () => {
  return useContractRead({
    address: VAULT_ADDRESS,
    abi: vaultAbi,
    functionName: "getPricePerFullShare",
  });
};

export const useWalletAura = () => {
  return useBalance({
    token: WANT_ADDRESS,
  });
};

export const useWalletGoldAura = () => {
  return useBalance({
    token: VAULT_ADDRESS,
  });
};

export const useVaultAura = () => {
  return useContractRead({
    address: VAULT_ADDRESS,
    abi: vaultAbi,
    functionName: "balance",
  });
};

export const useTotalAuraForWithdrawal = () => {
  return {
    data: 0,
  };
};
