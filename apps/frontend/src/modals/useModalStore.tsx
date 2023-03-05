import { create } from "zustand";

export type ModalView = "ShareDashboard" | "EditSubgraph";
export type ModalData = {
  shareData?: {
    title: string;
  };
};
interface IModalStore {
  view?: ModalView;
  data?: ModalData;
  isOpen: boolean;
  openModal: (view: IModalStore["view"], data?: ModalData) => void;
  closeModal: () => void;
  closeAndClear: () => void;
}

/**
 * Zustand Store
 */
export const useModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  view: undefined,
  data: undefined,
  openModal: (view: IModalStore["view"], data?: ModalData) => {
    set({ isOpen: true, view, data });
  },
  closeModal: () => {
    set({ isOpen: false });
  },
  closeAndClear: () => {
    set({ isOpen: false, view: undefined, data: undefined });
  },
}));
