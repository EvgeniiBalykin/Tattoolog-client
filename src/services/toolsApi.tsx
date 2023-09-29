import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BLOG_POST,
  BLOG_POSTS,
  CITIES,
  COUNTRIES,
  LOCAL_SERVER,
  PARTNERS,
} from 'api/index';
import { IBlogPost, ICountriesData, IPartnersData, IPostData } from 'types';

export const toolsApi = createApi({
  reducerPath: 'toolsApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    getCountry: builder.query<
      { results: ICountriesData[] },
      string | undefined
    >({
      query: (country) =>
        `${COUNTRIES}?country=${country ? country : ''}&page_size=30`,
    }),
    getCity: builder.query<
      { results: ICountriesData[] },
      { country: string | undefined; city: string | undefined }
    >({
      query: ({ country, city }) =>
        `${CITIES}?country=${country ? country : ''}&city=${
          city ? city : ''
        }&page_size=30`,
    }),
    getBlogPosts: builder.query<IPostData, number>({
      query: (limit) => BLOG_POSTS + `?page=1&page_size=${limit}`,
    }),
    getBlogPost: builder.query<IBlogPost, string>({
      query: (id) => `${BLOG_POST + id}/`,
    }),
    getPartners: builder.query<IPartnersData[], void>({
      query: () => PARTNERS,
    }),
  }),
});

export const {
  useGetCountryQuery,
  useGetCityQuery,
  useGetBlogPostsQuery,
  useGetBlogPostQuery,
  useGetPartnersQuery,
} = toolsApi;
