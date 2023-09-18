import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  PROFILE_PORTFOLIO,
  PROFILE_USER,
  LOCAL_SERVER,
  PROFILES_BY_ROLE,
  WORK_TYPES,
} from 'api';
import { IProfileData, IProfilePortfolio, IWorkTypes } from 'types';

interface ICatalogParams {
  role: string;
  name: string;
  city: string;
  country: string;
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    getMasterCatalog: builder.query<IProfileData[], ICatalogParams>({
      query: ({ role, name, city, country }) =>
        `${
          PROFILES_BY_ROLE + role
        }/?name=${name}&city=${city}&$country=${country}`,
    }),
    getProfileData: builder.query<IProfileData, number>({
      query: (userId) => `${PROFILE_USER + `${userId}/`}`,
    }),
    getProfilePortfolio: builder.query<IProfilePortfolio[], number>({
      query: (userId) => `${PROFILE_PORTFOLIO + `${userId}/`}`,
    }),
    getWorkTypes: builder.query<IWorkTypes[], void>({
      query: () => WORK_TYPES,
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
  useUpdateProfileMutation,
  useGetWorkTypesQuery,
} = profileApi;
