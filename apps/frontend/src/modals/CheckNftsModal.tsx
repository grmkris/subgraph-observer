import { ConnectButton } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { useAccount, useSigner } from "wagmi";
import Button from "../components/common/Button";
import {
  useErc721SoBalanceOf,
  useErc721SoGetMintPrice,
  useErc721SoMint,
  usePrepareErc721SoMint,
} from "../wagmiHooks";
import Image from "next/image";
import { env } from "../env/client.mjs";

export const CheckNftsModal = () => {
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

  const onImageClick = () => {
    // redirect to opensea collection of nft address
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose text-center">
        <h1>Subgraph Observer collection</h1>
        <p>
          To show your support for Subgraph Observer, you can mint an NFT.
          Minting an NFT will cost you 10 MATIC. The NFT will be minted on the
          Polygon network.
          <Image
            className="mask mask-squircle mx-auto cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
            src="/SubgraphObserver.png"
            alt="Subgraph Observer NFT"
            width={300}
            height={300}
            onClick={() => {
              if (env.NEXT_PUBLIC_ENV === "production") {
                window.open(
                  "https://opensea.io/collection/subgraphobserver",
                  "_blank"
                );
              } else {
                window.open(
                  "https://testnets.opensea.io/collection/subgraphobserver-1",
                  "_blank"
                );
              }
            }}
          />
        </p>
        <p>
          By owning an NFT, you will be able to use the Subgraph Observer
          dashboard sharing feature.
        </p>
        <p>
          You currently own {subgraphObserverNft.data?.toString() ?? 0} NFTs.
        </p>
      </article>
      <div className="flex flex-col items-center space-y-4">
        <ConnectButton
          showBalance={false}
          label={"Connect Wallet"}
          chainStatus={"icon"}
        />
        {!!account.address && (
          <Button
            onClick={() => mintSubgraphObserverNft.write?.()}
            className="w-full max-w-xs px-4 py-2"
          >
            Mint NFT
          </Button>
        )}
      </div>
    </div>
  );
};
