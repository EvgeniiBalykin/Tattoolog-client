import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  LOCAL_SERVER,
  PROFILE_PORTFOLIO,
  PROFILE_USER,
} from 'modules/SingUp/api/signUpApi';
import { IProfileData, IProfilePortfolio } from 'types';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    getProfileData: builder.query<IProfileData, number>({
      query: (userId) => `${PROFILE_USER + `${userId}/`}`, // Здесь используйте URL для запроса профиля
    }),
    getProfilePortfolio: builder.query<IProfilePortfolio[], null>({
      query: () => PROFILE_PORTFOLIO,
    }),
  }),
});

export const { useGetProfileDataQuery, useGetProfilePortfolioQuery } =
  profileApi;
