import { useBackendClient } from "./useBackendClient";
import { useAccount, useSigner } from "wagmi";
import { ethers } from "ethers";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SubgraphFormSchema } from "../types/types";
import { z } from "zod";

export const BACKEND_CLIENT_URL = new URL("http://localhost:3000/api/graphql");

export const useLinks = () => {
  const { data: backendClient } = useBackendClient(BACKEND_CLIENT_URL);
  const { address } = useAccount();

  return useQuery({
    queryKey: ["links", { address }],
    queryFn: async () => {
      if (!backendClient || !address) throw new Error("No backend client");
      return backendClient.Links();
    },
  });
};

export const useLinkData = (props: { id: string }) => {
  const { data: backendClient } = useBackendClient();
  const { address } = useAccount();

  return useQuery({
    queryKey: ["link", { id: props.id }],
    queryFn: async () => {
      if (!backendClient || !address) throw new Error("No backend client");
      const data = await backendClient.getLink({ id: props.id });
      return z.array(SubgraphFormSchema).parse(JSON.parse(data.Link?.content));
    },
    enabled: !!props.id,
  });
};

export const useCreateNewLink = () => {
  const { data: backendClient } = useBackendClient();
  const { address } = useAccount();
  const { data: signer } = useSigner();

  const createNewLink = useMutation({
    mutationFn: async (data: { content: string }) => {
      if (!backendClient || !signer || !address) {
        console.error({ backendClient, signer, address });
        throw new Error("No backend client or signer");
      }
      const hash = ethers.utils.keccak256(Buffer.from(data.content));
      const signature = await signer.signMessage(hash);
      // recover signer
      const recoveredAddress = ethers.utils.verifyMessage(hash, signature);
      if (recoveredAddress !== address) {
        throw new Error("Recovered address does not match");
      }
      if (!signature) throw new Error("No signature");
      return backendClient.createLink({
        address,
        content: data.content,
        signature,
      });
    },
  });

  return createNewLink;
};
