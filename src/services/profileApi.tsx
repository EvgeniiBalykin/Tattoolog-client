import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  PROFILE_PORTFOLIO,
  PROFILE_USER,
  LOCAL_SERVER,
  ADD_POST,
  PROFILES_BY_ROLE,
} from 'api';
import { IProfileData, IProfilePortfolio, ISendPost } from 'types';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    getMasterCatalog: builder.query<IProfileData[], string>({
      query: (role) => `${PROFILES_BY_ROLE + role}/`,
    }),
    getProfileData: builder.query<IProfileData, number>({
      query: (userId) => `${PROFILE_USER + `${userId}/`}`,
    }),
    getProfilePortfolio: builder.query<IProfilePortfolio[], number>({
      query: (userId) => `${PROFILE_PORTFOLIO + `${userId}/`}`,
    }),
    addPhotoPortfolio: builder.mutation<void, ISendPost>({
      query: (formData) => ({
        url: ADD_POST,
        method: 'POST',
        body: formData,
      }),
    }),
    updateProfile: builder.mutation<void, { id: number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `accounts/profile/${id}/`,
        method: 'PATCH',
        prepareHeaders: (headers: any) => {
          headers.set('Content-Type', 'multipart/form-data');
          return headers;
        },
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetProfileDataQuery,
  useGetProfilePortfolioQuery,
  useGetMasterCatalogQuery,
  useAddPhotoPortfolioMutation,
  useUpdateProfileMutation,
} = profileApi;
