import { SubgraphTable } from "./subgraphs-table/SubgraphTable";
import toast from "react-hot-toast";
import { FiShare2 } from "react-icons/fi";
import { base64Encode } from "../utils/functions";
import { useAppStore } from "../store";
import NoDataAlert from "./subgraphs-table/NoDataAlert";
import { useModalStore } from "../modals/useModalStore";
import { useCallback } from "react";
import Button from "./common/Button";

export const SubgraphsDashboard = () => {
  const { inputs } = useAppStore((state) => ({
    inputs: state.subgraphs,
  }));
  const openModal = useModalStore((state) => state.openModal);
  const handleOpenModal = useCallback(() => {
    openModal("ShareDashboard");
  }, [openModal]);
  return (
    <div className={"flex w-full flex-col pt-5 md:pt-6 "}>
      <Button
        color={"accent"}
        onClick={handleOpenModal}
        className={"max-w-lg self-end"}
      >
        Share
        <FiShare2 className="ml-2" />
      </Button>
      <SubgraphTable inputs={inputs} />
    </div>
  );
};

export const copyToClipboard = async (inputs: unknown) => {
  try {
    const hash = base64Encode(JSON.stringify(inputs));
    await navigator.clipboard.writeText(
      `${window.location.origin}/share/${hash}`
    );
    toast.success(`URL copied to clipboard 👏`);
  } catch (e) {
    toast.error(`Error copying URL to clipboard`);
  }
};
