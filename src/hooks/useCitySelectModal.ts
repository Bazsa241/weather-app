import { useCity, useCloseModal, useIsModalOpen, useSetCity } from '@app/store';
import { useState } from 'react';
import { useDebounce } from './useDebounce';
import { useCitySearch } from './useCitySearch';
import type { City } from '@app/types';
import { useToastError } from './useToastError';

export const useCitySelectModal = () => {
  const [input, setInput] = useState('');

  const setCity = useSetCity();
  const city = useCity();

  const isModalOpen = useIsModalOpen();
  const closeModal = useCloseModal();

  const debounced = useDebounce(input);

  const { data = [], isLoading, error, isError } = useCitySearch(debounced);

  useToastError(error, isError);

  const handleChange = (_: React.SyntheticEvent, value: City | null) => {
    if (!value) {
      return;
    }

    setCity(value);
    closeModal();
  };

  return {
    input,
    setInput,
    city,
    isModalOpen,
    closeModal,
    data,
    isLoading,
    handleChange,
  };
};
