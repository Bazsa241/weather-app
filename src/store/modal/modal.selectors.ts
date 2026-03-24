import { useStore } from '@app/store';

export const useIsModalOpen = () => useStore((state) => state.isModalOpen);
export const useOpenModal = () => useStore((state) => state.openModal);
export const useCloseModal = () => useStore((state) => state.closeModal);
