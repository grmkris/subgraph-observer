import { GraphQLClient } from "graphql-request";
import { getSdk as subgraphSdk } from "./subgraphs/generated/generated";
import { getSdk as apiSdk } from "./backend/generated/generated";
export { SubgraphMetadataDocument } from "./subgraphs/generated/generated";

export const getSubgraphClient = (props: { subgraphUrl: URL }) => {
  const { subgraphUrl } = props;
  return subgraphSdk(new GraphQLClient(subgraphUrl.toString()));
};

export const getBackendApiClient = (props: { backendUrl: URL }) => {
  const { backendUrl } = props;
  return apiSdk(new GraphQLClient(backendUrl.toString()));
};
