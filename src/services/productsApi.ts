import { rootApi } from './rootApi';

export interface IProduct {
  id: string;
  brand: string;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
}

const productsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => '/products',
      transformResponse: (response: { products: IProduct[] }) =>
        response.products,
      transformErrorResponse: response => `Oh no: ${response.status}`,
      providesTags: ['Product'],
    }),
    getSingleProduct: builder.query<IProduct, string>({
      query: (id: string) => `/products/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
