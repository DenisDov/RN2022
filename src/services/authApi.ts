import { rootApi } from './rootApi';

export interface User {
  first_name: string;
  last_name: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const authApi = rootApi.injectEndpoints({
  //   prepareHeaders: (headers, { getState }) => {
  //     // By default, if we have a token in the store, let's use that for authenticated requests
  //     const token = (getState() as RootState).auth.token;
  //     if (token) {
  //       headers.set('authorization', `Bearer ${token}`);
  //     }
  //     return headers;
  //   },
  endpoints: builder => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: credentials,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;