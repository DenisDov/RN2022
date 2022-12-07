import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { User, authApi } from '../../services/authApi';

type AuthState = {
  user: User | null;
  isDarkMode: boolean;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isDarkMode: Appearance.getColorScheme() === 'dark',
  } as AuthState,
  reducers: {
    logOut: state => {
      state.user = null;
    },
    setDarkMode: (state, { payload }: PayloadAction<boolean>) => {
      state.isDarkMode = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }: any) => {
        // FIXME: any
        state.user = payload;
      },
    );
  },
});

export const { logOut, setDarkMode } = authSlice.actions;

// Selectors start
const selectSelf = (state: RootState) => state.auth;
export const selectCurrentUser = createSelector(selectSelf, auth => auth.user);

export const selectThemeMode = createSelector(
  selectSelf,
  auth => auth.isDarkMode,
);

// Selectors end

export default authSlice.reducer;
