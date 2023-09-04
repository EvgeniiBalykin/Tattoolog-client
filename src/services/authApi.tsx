import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  LOCAL_SERVER,
  PROFILE_DATA,
  SIGN_IN,
  SING_UP,
} from 'modules/SingUp/api/signUpApi';
import { ILoginBody, IRegisterUser } from 'types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body: IRegisterUser) => {
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
    profileData: builder.mutation({
      query: (token: string | undefined) => {
        return {
          url: PROFILE_DATA,
          method: 'GET',
          headers: {
            Authorization: `JWT ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useProfileDataMutation,
} = authApi;
