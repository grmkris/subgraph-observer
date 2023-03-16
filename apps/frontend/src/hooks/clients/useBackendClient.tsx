import { getBackendApiClient } from "subgraph-client/src";

export const BACKEND_CLIENT_URL = new URL("http://localhost:3000/api/graphql");
export const apiClient = getBackendApiClient({
  backendUrl: BACKEND_CLIENT_URL,
});
