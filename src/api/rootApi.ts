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

// type InfoRequestType = {
//   id: string;
//   dateTime: string;
//   sourceId: string;
// };

type PaginationOperationRequest = {
  numberOfItemsPerPage: number;
  currentPageNumber: number;
};

type SortingOperation = {
  sortBy: string;
  sortOrder: string;
};

interface OperationRequest {
  clientId?: string;
  clientContractId?: string;
  assetId?: string;
  startDate: string;
  endDate: string;
  status?: string;
  pagination?: PaginationOperationRequest;
  sorting?: SortingOperation;
}

interface Constraints {
  parameter: string;
  message: string;
}

type InfoResponseType = {
  id: string;
  dateTime: string;
  sourceId: string;
  code: number;
  message: string;
  constraints: Constraints[];
};

type ExpInfo = {
  expId: number;
  assetQty: number;
  assetFactDate: string;
  assetPriceValue?: number;
  assetPriceCurr: string;
  accruedCoupon?: number;
  commValue?: number;
  isIIS?: boolean;
};

type OperationInfoType = {
  operId: string;
  objectId?: string;
  status: string;
  buySell: string;
  externalId?: string;
  documentId?: string;
  eventId?: number;
  clientContractId?: string;
  isIIS?: boolean;
  clientId: string;
  assetId: string;
  assetName?: string;
  isin?: string;
  actualDate: string;
  eventQty: number;
  dealCode?: string;
  expInfo?: ExpInfo[];
};

interface PaginationResponse extends PaginationOperationRequest {
  totalAmountOfItems: number;
  numberOfPages: number;
}

type OperationResponse = {
  responseInfo: InfoResponseType;
  operInfo: OperationInfoType[];
  pagination: PaginationResponse;
};

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
    operations: builder.query<OperationResponse, OperationRequest>({
      query: (params) => {
        const requestId = crypto.randomUUID();

        return {
          url: 'tax/operations',
          method: 'POST',
          body: {
            ...params,
            requestInfo: {
              id: requestId,
              dateTime: new Date().toISOString(),
              sourceId: 'WEB_CLIENT',
            },
          },
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'x-request-uuid': requestId,
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLazyOperationsQuery } = rootApi;
