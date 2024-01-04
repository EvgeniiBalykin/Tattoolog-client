import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  PROFILE_PORTFOLIO,
  PROFILE_USER,
  API_BASE_URL,
  PROFILES_BY_ROLE,
  WORK_TYPES,
  UPDATE_RATING,
  PORTFOLIO_POST,
} from '@api/index';
import {
  ICatalogData,
  IProfileData,
  IProfilePortfolio,
  IProfilePost,
  IUserMark,
  IWorkTypes,
} from '@interfaces/index';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getMasterCatalog: builder.query<
      ICatalogData,
      Record<string, string | number>
    >({
      query: ({ role, city, country, name, limit }) => ({
        url: `${PROFILES_BY_ROLE}${role}`,
        params: { role, city, country, name, page_size: limit, page: 1 },
      }),
    }),
    getProfileData: builder.query<IProfileData, number>({
      query: (userId) => `${PROFILE_USER + `${userId}/`}`,
    }),
    getProfilePortfolio: builder.query<
      IProfilePortfolio,
      Record<string, number | undefined>
    >({
      query: ({ userId, page = 1, pageSize = 9 }) => ({
        url: PROFILE_PORTFOLIO({ userId }),
        params: {
          page_size: pageSize,
          page,
        },
      }),
    }),
    getWorkTypes: builder.query<IWorkTypes[], void>({
      query: () => WORK_TYPES,
    }),
    getPortfolioPost: builder.query<IProfilePost, string>({
      query: (id) => `${PORTFOLIO_POST}${id}/`,
    }),
    updateProfile: builder.mutation<
      void,
      { id: number; formData: FormData | IProfileData; token: string }
    >({
      query: ({ id, formData, token }) => ({
        url: `accounts/profile/${id}/`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        prepareHeaders: (headers: any) => {
          headers.set('Content-Type', 'multipart/form-data');
          return headers;
        },
        body: formData,
      }),
    }),
    updateProfileRating: builder.mutation<void, IUserMark>({
      query: (body) => ({
        url: UPDATE_RATING,
        method: 'POST',
        body,
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
  useUpdateProfileRatingMutation,
  useGetPortfolioPostQuery,
} = profileApi;
