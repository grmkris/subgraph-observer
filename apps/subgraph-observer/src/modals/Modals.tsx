import { useModalStore } from "./useModalStore";
import { EditSubgraphFormModal } from "./EditSubgraphFormModal";
import { ShareDashboardModal } from "./ShareDashboardModal";
import Button from "../components/common/Button";
import { shallow } from "zustand/shallow";

export const Modals = () => {
  const { closeModal, view, isOpen } = useModalStore(
    (state) => ({
      closeModal: state.closeModal,
      view: state.view,
      isOpen: state.isOpen,
    }),
    shallow
  );
  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
        defaultChecked={isOpen}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {view === "EditSubgraph" && <EditSubgraphFormModal />}
          {view === "ShareDashboard" && <ShareDashboardModal />}
          <div className="modal-action">
            <Button onClick={closeModal}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
