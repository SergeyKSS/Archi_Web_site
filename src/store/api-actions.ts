import type { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../types/state";
import type { Offer } from '../types/offer';
import { APIRoute } from "../const/const";
import { saveToken, dropToken } from "../services/token";
import type { DetailedOffer } from "../types/detailedOffer";
import type { AuthData } from "../types/auth-data";
import type { AuthInfo } from "../types/user-data";

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

export const fetchOfferByIdAction = createAsyncThunk<DetailedOffer, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'offer/fetchById',
  async (offerId, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<DetailedOffer>(`${APIRoute.Offers}/${offerId}`);
      return data;
    } catch {
      return rejectWithValue('Failed to fetch offer by id from server :-(');
    }
  }
);

export const checkAuthAction = createAsyncThunk<AuthInfo, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<AuthInfo>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<AuthInfo, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'user/login',
  async({login: email, password}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<AuthInfo>(APIRoute.Login, {email, password});
      saveToken(data.token);
      return data;
    } catch {
      return rejectWithValue('Failed to login, try one more time');
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'user/logout',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch {
      return rejectWithValue('Failded to logout, try one more time');
    }
  },
);