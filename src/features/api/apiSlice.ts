import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = dummyApi;
