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
  BLOG_CATEGORIES,
  FESTIVAL_POST,
} from '@api/index';
import {
  IAssociationType,
  IBlogCategorie,
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
    getBlogPosts: builder.query<
      IPostData,
      { limit: number; language: string; category: string; country: string }
    >({
      query: ({ limit, language, category, country }) => ({
        url: BLOG_POSTS,
        params: { language, limit, ...(category && { category }), country },
      }),
    }),
    getBlogPost: builder.query<IBlogPost, { slug?: string; lang?: string }>({
      query: ({ slug, lang }) => `${BLOG_POST + `${slug || ''}/${lang}`}/`,
    }),
    getFesivalPosts: builder.query<
      IFestivalData,
      { limit: number; country: string; language: string }
    >({
      query: ({ limit, country, language }) => ({
        url: FESTIVAL_POSTS,
        params: { page: 1, page_size: limit, country, language },
      }),
    }),
    getFestivalPost: builder.query<IFestivalPost, string>({
      query: (slug) => FESTIVAL_POST + slug,
    }),
    getPartners: builder.query<IPartnersData[], void>({
      query: () => PARTNERS,
    }),
    getAssociationsType: builder.query<IAssociationType[], void>({
      query: () => ASSOCIATION_TYPES,
    }),
    getBlogCategories: builder.query<IBlogCategorie[], void>({
      query: () => BLOG_CATEGORIES,
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
  useGetBlogCategoriesQuery,
} = toolsApi;
