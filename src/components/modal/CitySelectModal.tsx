import cn from 'classnames';
import { useCitySearch } from '@app/hooks';
import { useDebounce } from '@app/hooks';
import { useCity, useCloseModal, useIsModalOpen, useSetCity } from '@app/store';
import type { City } from '@app/types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Autocomplete,
  TextField,
  CircularProgress,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { glassStyles, modalGlassStyles } from '@app/theme';

export const CitySelectModal = () => {
  const [input, setInput] = useState('');

  const { t } = useTranslation('common');

  const setCity = useSetCity();
  const city = useCity();

  const isModalOpen = useIsModalOpen();
  const closeModal = useCloseModal();

  const debounced = useDebounce(input);

  const { data = [], isLoading } = useCitySearch(debounced);

  const handleChange = (_: React.SyntheticEvent, value: City | null) => {
    if (!value) {
      return;
    }

    setCity(value);
    closeModal();
  };

  return (
    <Dialog
      open={isModalOpen}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: { sx: modalGlassStyles },
        backdrop: {
          sx: {
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
      }}
    >
      <DialogTitle>{t('searchCity')}</DialogTitle>

      <IconButton
        className={cn('absolute! right-2 top-2', {
          'hidden!': !city,
        })}
        aria-label={t('close')}
        onClick={closeModal}
        sx={(theme) => ({ color: theme.palette.grey[500] })}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <Autocomplete
          className="mt-2"
          options={data}
          loading={isLoading}
          getOptionLabel={(option) => option.name}
          onInputChange={(_, value) => setInput(value)}
          onChange={handleChange}
          noOptionsText={t('noOptions')}
          slotProps={{
            paper: { sx: glassStyles },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t('city')}
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isLoading && <CircularProgress size={20} />}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
        />
      </DialogContent>
    </Dialog>
  );
};
