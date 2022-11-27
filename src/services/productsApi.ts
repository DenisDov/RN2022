import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { capitalize } from '../utils/capitalize';
import { rootApi } from './rootApi';

export interface IProduct {
  id: string;
  brand: string;
  title: string;
  thumbnail: string;
  description: string;
  price: string;
}

const transformErrorResponse = (response: FetchBaseQueryError) =>
  `Oh no: ${response.status}`;

const productsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => '/products',
      transformResponse: (response: { products: IProduct[] }) =>
        response.products.map(product => {
          return {
            ...product,
            brand: capitalize(product.brand, true),
            price: new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(+product.price),
          };
        }),
      transformErrorResponse,
      providesTags: ['Product'],
    }),
    getSingleProduct: builder.query<IProduct, string>({
      query: (id: string) => `/products/${id}`,
      transformErrorResponse,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
