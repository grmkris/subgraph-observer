import { clsx } from "clsx";
import { useMemo } from "react";
import { useGetNodeLatestBlock } from "../../hooks/subgraph-status/useGetNodeLatestBlock";
import { useGetSubgraphStatus } from "../../hooks/subgraph-status/useGetSubgraphStatus";

type Props = {
  chainId: number;
  indexer: URL;
};

export function SubgraphStatusLabel({ chainId, indexer }: Props) {
  const subgraphStatus = useGetSubgraphStatus(indexer);
  const latestBlock = useGetNodeLatestBlock(chainId);

  const { blocksBehind, subgraphBlock, chainBlock } = useMemo(() => {
    return {
      blocksBehind:
        latestBlock.data &&
        subgraphStatus.data?._meta?.block.number &&
        latestBlock.data - subgraphStatus.data?._meta?.block.number,
      subgraphBlock: subgraphStatus.data?._meta?.block.number.toString(),
      chainBlock: latestBlock.data?.toString(),
    };
  }, [latestBlock.data, subgraphStatus.data]);

  if (subgraphStatus.isLoading || latestBlock.isLoading)
    return <div className="badge-warning badge gap-2">Loading...</div>;

  return (
    <div
      className="tooltip tooltip"
      data-tip={"Subgraph: " + subgraphBlock + "" + " Chain: " + chainBlock}
    >
      {(blocksBehind !== undefined && (
        <div
          className={`badge w-48 rounded-lg px-3 py-4 font-semibold text-white ${clsx(
            { "badge-success": blocksBehind < 10 },
            { "badge-warning": blocksBehind > 10 && blocksBehind < 100 },
            { "badge-error": blocksBehind > 100 }
          )}`}
        >
          Blocks behind: {blocksBehind}
        </div>
      )) ?? (
        <div className="badge-error badge gap-2">
          Blocks behind: Not available
        </div>
      )}
    </div>
  );
}
