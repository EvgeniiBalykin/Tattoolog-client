import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  LOCAL_SERVER,
  PROFILE_DATA,
  RESET_PASSWORD,
  SET_NEW_PASSWORD,
  SIGNUP_ACTIVATION,
  SIGN_IN,
  SING_UP,
} from '@api/index';
import {
  IAcceptData,
  ILoginBody,
  ISetNewPassword,
  IUserData,
} from '@interfaces/index';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_SERVER }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body: IUserData) => {
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
    userData: builder.mutation({
      query: (token: string | undefined) => {
        return {
          url: PROFILE_DATA,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (email: string) => {
        return {
          url: RESET_PASSWORD,
          method: 'POST',
          body: {
            email,
          },
        };
      },
    }),
    setNewPassword: builder.mutation({
      query: (body: ISetNewPassword) => {
        return {
          url: SET_NEW_PASSWORD,
          method: 'POST',
          body,
        };
      },
    }),
    acceptRegistration: builder.mutation({
      query: (body: IAcceptData) => {
        return {
          url: SIGNUP_ACTIVATION,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useUserDataMutation,
  useResetPasswordMutation,
  useSetNewPasswordMutation,
  useAcceptRegistrationMutation,
} = authApi;
