import { useAccount, useSigner } from "wagmi";
import { ethers } from "ethers";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SubgraphFormSchema } from "../types/types";
import { z } from "zod";
import { apiClient } from "./clients/useBackendClient";

export const useLinks = () => {
  const { address } = useAccount();

  return useQuery({
    queryKey: ["links", { address }],
    queryFn: async () => {
      if (!address) throw new Error("No backend client");
      return apiClient.Links();
    },
  });
};

export const useLinkData = (props: { id: string }) => {
  const { address } = useAccount();

  return useQuery({
    queryKey: ["link", { id: props.id }],
    queryFn: async () => {
      if (!address) throw new Error("No backend client");
      const data = await apiClient.getLink({ id: props.id });
      return z.array(SubgraphFormSchema).parse(JSON.parse(data.Link?.content));
    },
    enabled: !!props.id,
  });
};

export const useCreateNewLink = () => {
  const { address } = useAccount();
  const { data: signer } = useSigner();

  const createNewLink = useMutation({
    mutationFn: async (data: { content: string }) => {
      if (!signer || !address) {
        console.error({ signer, address });
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
      return apiClient.createLink({
        address,
        content: data.content,
        signature,
      });
    },
  });

  return createNewLink;
};
