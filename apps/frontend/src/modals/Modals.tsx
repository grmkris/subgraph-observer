import { useModalStore } from "./useModalStore";
import { EditSubgraphFormModal } from "./EditSubgraphFormModal";
import { ShareDashboardModal } from "./ShareDashboardModal";
import { shallow } from "zustand/shallow";

export const Modals = () => {
  const { view } = useModalStore((state) => ({ view: state.view }), shallow);
  switch (view) {
    case "EditSubgraph":
      return <EditSubgraphFormModal />;
    case "ShareDashboard":
      return <ShareDashboardModal />;
    default:
      return null;
  }
};
