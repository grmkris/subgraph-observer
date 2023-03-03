import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useCallback } from "react";
import { useCreateNewLink } from "../hooks/useLinks";
import { useAppStore } from "../store";
import toast from "react-hot-toast";

export const EditSubgraphFormModal = () => {
  const createNewLink = useCreateNewLink();
  const { inputs } = useAppStore((state) => ({
    inputs: state.subgraphs,
  }));
  const onShareTable = useCallback(() => {
    createNewLink.mutate(
      {
        content: JSON.stringify(inputs),
      },
      {
        onSuccess: (data) => {
          navigator.clipboard
            .writeText(
              `${window.location.href}dashboard/${data.createLink?.id}`
            )
            .then(() => {
              toast.success(`URL copied to clipboard 👏`);
            });
        },
        onError: (error) => {
          toast.error(`Error sharing table: ${error}`);
        },
      }
    );
  }, [createNewLink, inputs]);
  return (
    <div>
      <ConnectButton />
    </div>
  );
};
