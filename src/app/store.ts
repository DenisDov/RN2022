import { configureStore } from '@reduxjs/toolkit';
import Reactotron from '../../ReactotronConfig';

import { rootApi } from '../services/rootApi';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    auth: authReducer,
    counter: counterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      //  serializableCheck: false
    }).concat(rootApi.middleware),
  enhancers: [Reactotron.createEnhancer!()],
});

//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
