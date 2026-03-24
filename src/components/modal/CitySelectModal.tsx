import cn from 'classnames';
import { useCitySelectModal } from '@app/hooks';
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
import { useTranslation } from 'react-i18next';
import { glassStyles, modalGlassStyles } from '@app/theme';

export const CitySelectModal = () => {
  const { t } = useTranslation('common');

  const { setInput, city, closeModal, data, handleChange, isLoading, isModalOpen } =
    useCitySelectModal();

  const handleDialogClose = () => {
    if (!city) {
      return;
    }

    closeModal();
  };

  return (
    <Dialog
      open={isModalOpen}
      fullWidth
      maxWidth="sm"
      onClose={handleDialogClose}
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
          getOptionLabel={(option) => `${option.name} - ${option.country}`}
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
