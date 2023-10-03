import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  PROFILE_PORTFOLIO,
  PROFILE_USER,
  LOCAL_SERVER,
  PROFILES_BY_ROLE,
  WORK_TYPES,
} from '@api/index';
import {
  ICatalogData,
  IProfileData,
  IProfilePortfolio,
  IWorkTypes,
} from '@interfaces/index';

interface ICatalogParams {
  role: string;
  name: string;
  city: string;
  country: string;
  limit: number;
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    getMasterCatalog: builder.query<ICatalogData, ICatalogParams>({
      query: ({ role, name, city, country, limit }) =>
        `${
          PROFILES_BY_ROLE + role
        }/?name=${name}&city=${city}&$country=${country}&page=1&page_size=${limit}`,
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
    updateProfile: builder.mutation<
      void,
      { id: number; formData: FormData | IProfileData }
    >({
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
