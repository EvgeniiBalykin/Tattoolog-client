import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CITIES, COUNTRIES, LOCAL_SERVER } from 'api/index';
import { ICountriesData } from 'types';

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
  }),
});

export const { useGetCountryQuery, useGetCityQuery } = toolsApi;
