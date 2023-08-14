import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCAL_SERVER, SIGN_IN, SING_UP } from 'modules/SingUp/api/signUpApi';

interface IAuthBody {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
}

interface ILoginBody {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body: IAuthBody) => {
        return {
          url: SING_UP,
          method: 'POST',
          body,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (body: ILoginBody) => {
        return {
          url: SIGN_IN,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
