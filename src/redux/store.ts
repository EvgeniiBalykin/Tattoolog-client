import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import loginReducer from 'modules/Login/features/loginSlice';
import { authApi } from 'services/authApi';
import userReduser from 'modules/Login/features/userSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReduser,
  [authApi.reducerPath]: authApi.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
setupListeners(store.dispatch);
