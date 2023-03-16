import { useAccount, useSigner, useSignMessage } from "wagmi";
import { ethers } from "ethers";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SubgraphFormSchema } from "../types/types";
import { z } from "zod";
import { apiClient } from "./clients/useBackendClient";
import toast from "react-hot-toast";

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

export const useShareDashboard = (props: {
  content: string;
  onSuccess?: (url: string) => void;
}) => {
  const { address } = useAccount();
  const message = ethers.utils.keccak256(Buffer.from(props.content));
  const signData = useSignMessage({
    message,
    onError: (error) => {
      console.error(error);
      toast.error(`Error creating link: ${error.message}`);
    },
  });

  const createLink = useMutation({
    mutationFn: async () => {
      const signature = await signData.signMessageAsync();
      const recoveredAddress = ethers.utils.verifyMessage(message, signature);
      if (recoveredAddress !== address) {
        throw new Error("Recovered address does not match");
      }
      return apiClient.createLink({
        address,
        content: props.content,
        signature: signature,
      });
    },
    onSuccess: (data) => {
      const url = `${window.location.href}dashboard/${data.createLink?.id}`;
      navigator.clipboard.writeText(url).then(() => {
        toast.success(`URL copied to clipboard 👏`);
      });
      if (props.onSuccess) {
        props.onSuccess(url);
      }
    },
  });

  return createLink;
};
