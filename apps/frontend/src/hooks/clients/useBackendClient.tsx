import { getBackendApiClient } from "subgraph-client/src";
import { env } from "../../env/client.mjs";

export const BACKEND_CLIENT_URL = new URL(env.NEXT_PUBLIC_API_URL);
export const apiClient = getBackendApiClient({
  backendUrl: BACKEND_CLIENT_URL,
});
