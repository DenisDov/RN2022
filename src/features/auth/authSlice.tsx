import { createSelector, createSlice } from '@reduxjs/toolkit';

// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { User, authApi } from '../../services/authApi';

type AuthState = {
  user: User | null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null } as AuthState,
  reducers: {
    logOut: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      },
    );
  },
});

export const { logOut } = authSlice.actions;

// Selectors start
const selectSelf = (state: RootState) => state.auth;
export const selectCurrentUser = createSelector(selectSelf, auth => auth.user);
// Selectors end

export default authSlice.reducer;
