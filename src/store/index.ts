import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createAPI } from "../services/api";
import { offersReducer } from "./offers/offers-slice";
import { errorReducer } from "./error/error-slice";
import { currentOfferReducer } from "./detailed-offer";
import { userReducer } from "./user-slice/user-slice";

export const rootReducer = combineReducers({
  offers: offersReducer,
  error: errorReducer,
  currentOfferById: currentOfferReducer,
  user: userReducer,
});

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});