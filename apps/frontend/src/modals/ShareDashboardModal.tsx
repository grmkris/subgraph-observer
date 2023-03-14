import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useCallback } from "react";
import { useShareDashboard } from "../hooks/useLinks";
import { useAppStore } from "../store";
import toast from "react-hot-toast";
import { useAccount, useSigner } from "wagmi";
import Button from "../components/common/Button";
import {
  useErc721SoBalanceOf,
  useErc721SoGetMintPrice,
  useErc721SoMint,
  usePrepareErc721SoMint,
} from "../wagmiHooks";
import type { EthersError } from "@enzoferey/ethers-error-parser";
import { getParsedEthersError } from "@enzoferey/ethers-error-parser";

export const ShareDashboardModal = () => {
  const account = useAccount();
  const { data: signer } = useSigner();
  const amountToPay = useErc721SoGetMintPrice({
    chainId: 80001,
  });
  const subgraphObserverNft = useErc721SoBalanceOf({
    chainId: 80001,
    args: [account.address ?? "0x"],
    enabled: !!account.address,
  });
  const config = usePrepareErc721SoMint({
    chainId: 80001,
    signer: signer,
    overrides: {
      value: amountToPay.data,
    },
    enabled: !!account.address && !!signer && !!amountToPay.data,
  });
  const mintSubgraphObserverNft = useErc721SoMint({
    ...config.config,
    onError: (error) => {
      toast.error(`Error minting nft: ${error.message}`);
    },
    onSuccess: () => {
      toast.success(`NFT minted!`);
    },
  });
  const { inputs } = useAppStore((state) => ({
    inputs: state.subgraphs,
  }));
  const createNewLink = useShareDashboard({ content: JSON.stringify(inputs) });
  const onClick = useCallback(() => createNewLink.mutate(), [createNewLink]);
  return (
    <div>
      <ConnectButton
        showBalance={false}
        label={"Connect Wallet"}
        chainStatus={"icon"}
      />
      To share this dashboard, you need to own a subgraph-observer nft on the
      wallet you are connecting. Once you connect, click the button below to
      create a shareable link. Balance: {subgraphObserverNft.data?.toString()}
      <Button onClick={() => mintSubgraphObserverNft.write?.()}>Mint</Button>
      <Button onClick={onClick}>Share</Button>
    </div>
  );
};
