import { useSnackbar } from 'notistack';
import type { ApiError } from '@app/api/handlers';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useToastError = (error: Error | null, isError: boolean) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation('error');

  const handleError = useCallback(
    (error: ApiError | unknown) => {
      let message = t('unknown');
      console.log(error);
      if ((error as ApiError).status !== undefined) {
        const e = error as ApiError;

        if (e.status === 0) {
          message = t('noNetwork');
        } else if (e.status >= 500) {
          message = t('serverError');
        } else if (e.type) {
          message = t(e.type, { defaultValue: e.message });
        }
      }

      enqueueSnackbar(message, {
        variant: 'error',
        key: message,
        preventDuplicate: true,
      });
    },
    [enqueueSnackbar, t],
  );

  useEffect(() => {
    if (error && isError) {
      handleError(error);
    }
  }, [error, isError, handleError]);
};
