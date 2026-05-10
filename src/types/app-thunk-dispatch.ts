import { createAPI } from '../services/api';
import type{ RootState } from '../types/state';
import type{ ThunkDispatch } from 'redux-thunk';
import type { Action } from 'redux';


export type AppThunkDispatch = ThunkDispatch<RootState, ReturnType<typeof createAPI>, Action>;
