import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../app/constants';

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  role: string;
}

interface RegisterResponse {
  user: User;
  token: string;
}

export const rootApi = createApi({
  reducerPath: 'rootApi',
  // TODO: заменить baseUrl на переменную окружения
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
        credentials: 'include', // ОБЯЗАТЕЛЬНО для установки cookie!
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    operations: builder.mutation({
      query: (credentials) => ({
        url: 'tax/operations',
        method: 'POST',
        body: credentials,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'x-request-uuid': credentials.requestInfo.id,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useOperationsMutation } = rootApi;
