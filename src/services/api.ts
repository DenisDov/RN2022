import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../models/IProduct';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: builder => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => 'products',
      transformResponse: (rawResult: { result: { products: IProduct[] } }) => {
        return rawResult.result.products;
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = dummyApi;
