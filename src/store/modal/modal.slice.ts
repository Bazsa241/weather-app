import type { StateCreator } from 'zustand';
import type { StoreState } from '@app/store';

export type ModalSlice = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export type CreateModalSlice = StateCreator<StoreState, [], [], ModalSlice>;

export const createModalSlice: CreateModalSlice = (set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
});
