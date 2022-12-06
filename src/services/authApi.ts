import { rootApi } from './rootApi';

export interface User {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

export interface UserResponse {
  user: User;
}

export interface LoginRequest {
  username: string;
  password: string;
  agreement?: boolean;
}

export const authApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: credentials,
        };
      },
      // transformResponse: response => console.log('response', response),
      // transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
