import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => 'products',
      transformResponse: response => response.products,
    }),
  }),
});

export const { useGetAllProductsQuery } = dummyApi;
