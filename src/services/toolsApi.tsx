import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BLOG_POST,
  BLOG_POSTS,
  CITIES,
  COUNTRIES,
  API_BASE_URL,
  PARTNERS,
  FESTIVAL_POSTS,
  ASSOCIATION_TYPES,
} from '@api/index';
import {
  IAssociationType,
  IBlogPost,
  ICountriesData,
  IFestivalData,
  IFestivalPost,
  IPartnersData,
  IPostData,
} from '@interfaces/index';

export const toolsApi = createApi({
  reducerPath: 'toolsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCountry: builder.query<
      { results: ICountriesData[] },
      string | undefined
    >({
      query: (country) => ({
        url: COUNTRIES,
        country: country || '',
        page_size: 30,
      }),
    }),
    getCity: builder.query<
      { results: ICountriesData[] },
      { country: string | undefined; city: string | undefined }
    >({
      query: ({ country, city }) => ({
        url: CITIES,
        country: country || '',
        city: city || '',
        page_size: 30,
      }),
    }),
    getBlogPosts: builder.query<IPostData, { limit: number; language: string }>(
      {
        query: ({ limit, language }) => ({
          url: BLOG_POSTS,
          params: {
            language: language,
            page: 1,
            page_size: limit,
          },
        }),
      }
    ),
    getBlogPost: builder.query<IBlogPost, { slug?: string; lang?: string }>({
      query: ({ slug, lang }) => `${BLOG_POST + `${slug || ''}/${lang}`}/`,
    }),
    getFesivalPosts: builder.query<IFestivalData, number>({
      query: (limit) => ({
        url: FESTIVAL_POSTS,
        page: 1,
        page_size: limit,
      }),
    }),
    getFestivalPost: builder.query<IFestivalPost, string>({
      query: (id) => `${FESTIVAL_POSTS + id}/`,
    }),
    getPartners: builder.query<IPartnersData[], void>({
      query: () => PARTNERS,
    }),
    getAssociationsType: builder.query<IAssociationType[], void>({
      query: () => ASSOCIATION_TYPES,
    }),
  }),
});

export const {
  useGetCountryQuery,
  useGetCityQuery,
  useGetBlogPostsQuery,
  useGetBlogPostQuery,
  useGetPartnersQuery,
  useGetFesivalPostsQuery,
  useGetFestivalPostQuery,
  useGetAssociationsTypeQuery,
} = toolsApi;
