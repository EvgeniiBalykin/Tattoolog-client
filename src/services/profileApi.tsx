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
  IUserMark,
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
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getMasterCatalog: builder.query<ICatalogData, ICatalogParams>({
      query: (params) => buildQueryString(params),
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
    getPortfolioPost: builder.query<IProfilePortfolio, string>({
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

function buildQueryString(params: ICatalogParams): string {
  const { role, name, city, country, limit } = params;
  const queryParams = new URLSearchParams({
    role,
    name,
    city,
    country,
    page: '1',
    page_size: limit.toString(),
  });
  return `${PROFILES_BY_ROLE}${role}/?${queryParams.toString()}`;
}
