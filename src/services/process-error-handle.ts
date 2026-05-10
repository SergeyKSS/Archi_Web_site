import { setError } from '../store/error/error-slice';
import type { AppDispatch } from '../types/state';
import { TIMEOUT_SHOW_ERROR } from '../const/const';


export const processErrorHandle = (dispatch: AppDispatch, message: string): void => {
  dispatch(setError(message));

  setTimeout(() => {
    dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
};


