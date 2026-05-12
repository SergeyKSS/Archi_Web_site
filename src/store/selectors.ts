import type { RootState } from '../types/state';
import { createSelector } from "@reduxjs/toolkit";

const selectSlicedOffers = createSelector([
  (state: RootState) => state.offers.offersList,
],
(offers) => {
  const slicedOffers = offers.slice(0, 6);
  return slicedOffers;
});

const selectOffersById = createSelector([
  (state: RootState) => state.currentOfferById.currentOffer,
],
(currentOffer) => {
  return (currentOffer ? [currentOffer, currentOffer] : [])
});

export {selectSlicedOffers, selectOffersById};