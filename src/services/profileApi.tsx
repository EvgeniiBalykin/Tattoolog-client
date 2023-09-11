import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROFILE_PORTFOLIO, PROFILE_USER, LOCAL_SERVER } from 'api';
import { IProfileData, IProfilePortfolio } from 'types';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    getProfileData: builder.query<IProfileData, number>({
      query: (userId) => `${PROFILE_USER + `${userId}/`}`,
    }),
    getProfilePortfolio: builder.query<IProfilePortfolio[], null>({
      query: () => PROFILE_PORTFOLIO,
    }),
  }),
});

export const { useGetProfileDataQuery, useGetProfilePortfolioQuery } =
  profileApi;
