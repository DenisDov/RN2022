import { configureStore } from '@reduxjs/toolkit';

import { dummyApi } from '../services/api';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [dummyApi.reducerPath]: dummyApi.reducer,
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dummyApi.middleware),
});

//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
