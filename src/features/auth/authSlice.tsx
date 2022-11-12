import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { authApi, User } from '../../services/authApi';
import type { RootState } from '../../app/store';

type AuthState = {
  user: User | null;
  token: string | null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      },
    );
  },
  // reducers: {
  //   setCredentials: (
  //     state,
  //     {
  //       payload: { user, token },
  //     }: PayloadAction<{ user: User; token: string }>,
  //   ) => {
  //     state.user = user;
  //     state.token = token;
  //   },
  // },
});

export const { setCredentials } = authSlice.actions;

// Selectors start
const selectSelf = (state: RootState) => state.auth;
export const selectCurrentUser = createSelector(selectSelf, auth => auth.user);
// Selectors end

export default authSlice.reducer;
