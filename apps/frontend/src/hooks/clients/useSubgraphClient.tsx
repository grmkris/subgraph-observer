import { useQuery } from "@tanstack/react-query";
import { getSubgraphClient } from "subgraph-client";

export const useSubgraphClient = (indexer?: URL) => {
  return useQuery(
    ["useSubgraphClient", { indexer }],
    async () => {
      if (!indexer) {
        throw new Error("No indexer");
      }
      return getSubgraphClient({ subgraphUrl: indexer });
    },
    {
      enabled: !!indexer,
    }
  );
};
