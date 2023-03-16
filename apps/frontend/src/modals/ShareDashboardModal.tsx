import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useCallback, useState } from "react";
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

export const ShareDashboardModal = () => {
  const [generatedLink, setGeneratedLink] = useState<string>();
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
  const userHasNFT =
    subgraphObserverNft.data && subgraphObserverNft.data.gte(0);

  const createNewLink = useShareDashboard({
    content: JSON.stringify(inputs),
    onSuccess: (data) => setGeneratedLink(data),
  });
  const onClick = useCallback(() => createNewLink.mutate(), [createNewLink]);
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose text-center">
        <h1>Share Dashboard</h1>
        <p>
          Share your dashboard with others by creating a link. Anyone with the
          link can view your dashboard.
        </p>
        {userHasNFT ? (
          <p>
            Congratulations! You own a subgraph observer NFT. Click the
            &ldquo;Share&ldquo; button below to share your dashboard.
          </p>
        ) : (
          <p>
            To share your dashboard, you need to own a subgraph observer NFT.
            You can mint one by clicking the button below for 10 MATIC.
          </p>
        )}
      </article>
      <div className="flex flex-col items-center space-y-4">
        <ConnectButton
          showBalance={false}
          label={"Connect Wallet"}
          chainStatus={"icon"}
        />
        {!!account.address && (
          <>
            {!userHasNFT && (
              <Button
                onClick={() => mintSubgraphObserverNft.write?.()}
                className="w-full max-w-xs px-4 py-2"
              >
                Mint NFT
              </Button>
            )}
            {userHasNFT && (
              <Button onClick={onClick} className="w-full max-w-xs px-4 py-2">
                Share Dashboard
              </Button>
            )}
            {generatedLink && (
              <div
                className="badge-outline badge mt-2 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(generatedLink);
                  toast.success("URL copied to clipboard");
                }}
              >
                {generatedLink}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
