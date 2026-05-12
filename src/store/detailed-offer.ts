import type { DetailedOffer } from '../types/detailedOffer';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferByIdAction } from './api-actions';

type CurrentOfferState = {
  currentOffer: DetailedOffer | null;
  isCurrentOfferLoading: boolean;
  isCurrentOfferNotFound: boolean;
};

const initialState: CurrentOfferState = {
  currentOffer: null,
  isCurrentOfferLoading: false,
  isCurrentOfferNotFound: false,
};

const currentOfferSlice = createSlice({
  name: 'current/offer',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
        state.isCurrentOfferNotFound = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.isCurrentOfferLoading = false;
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.isCurrentOfferLoading = false;
        state.isCurrentOfferNotFound = true;
      })
  },
});

export const currentOfferReducer = currentOfferSlice.reducer;
