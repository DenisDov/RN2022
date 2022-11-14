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
