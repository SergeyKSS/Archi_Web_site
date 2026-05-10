import type { Offer } from "../../types/offer";
import { createSlice } from "@reduxjs/toolkit";
import { fetchOffersAction } from "../api-actions";

type OffersState = {
  offersList: Offer[];
  isOffersLoading: boolean;
  isOfferPostingToFavorite: boolean;
};

const initialState: OffersState = {
  offersList: [],
  isOffersLoading: false,
  isOfferPostingToFavorite: false,
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
      });
  },
});

export const offersReducer = offersSlice.reducer;
