import { GraphQLClient } from "graphql-request";
import { getBackendApiSdk } from "subgraph-client/src";

export const BACKEND_CLIENT_URL = new URL("http://localhost:3000/api/graphql");
export const apiClient = (() => {
  const subgraphClient = new GraphQLClient(BACKEND_CLIENT_URL.toString());
  return getBackendApiSdk(subgraphClient);
})();
