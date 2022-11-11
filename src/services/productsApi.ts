import { rootApi } from './rootApi';

type IProduct = {
  id: string;
  brand: string;
  title: string;
  description: string;
  price: number;
};

const productsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => '/products?limit=40',
      transformResponse: (response: { products: IProduct[] }) =>
        response.products,
      providesTags: ['Product'],
    }),
    getSingleProduct: builder.query<IProduct, string>({
      query: (id: string) => `/products/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
