import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useCallback } from "react";
import { useShareDashboard } from "../hooks/useLinks";
import { useAppStore } from "../store";
import toast from "react-hot-toast";

export const EditSubgraphFormModal = () => {
  return (
    <div>
      <ConnectButton />
    </div>
  );
};
