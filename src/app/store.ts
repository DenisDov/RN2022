import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { MMKV } from 'react-native-mmkv';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  Storage,
  persistReducer,
  persistStore,
} from 'redux-persist';

import Reactotron from '../../ReactotronConfig';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import { rootApi } from '../services/rootApi';

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  auth: authReducer,
  counter: counterReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
  whitelist: ['auth'],
  blacklist: [rootApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rootApi.middleware),
  enhancers: [Reactotron.createEnhancer!()],
});

export const persistor = persistStore(store);

//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
