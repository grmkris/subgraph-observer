import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { getBackendApiSdk } from "subgraph-client";

export const BACKEND_CLIENT_URL = new URL("http://localhost:3000/api/graphql");

export const useBackendClient = (url?: URL) => {
  return useQuery({
    queryKey: [["useBackendClient", { url: url ?? BACKEND_CLIENT_URL }]],
    queryFn: async () => {
      const subgraphClient = new GraphQLClient(
        url ? url.toString() : BACKEND_CLIENT_URL.toString()
      );
      return getBackendApiSdk(subgraphClient);
    },
  });
};
