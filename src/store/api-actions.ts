import type { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../types/state";
import type { Offer } from '../types/offer';
import { APIRoute } from "../const/const";
// import { saveToken, dropToken } from "../services/token";

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      return data;
    } catch {
      return rejectWithValue('Failed to fetch offers from server');
    }
  }
);