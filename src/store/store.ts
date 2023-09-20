import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import loginReducer from 'store/reducers/loginSlice';
import { authApi } from 'services/authApi';
import userReduser from 'store/reducers/userSlice';
import { profileApi } from 'services/profileApi';
import profileReducer from './reducers/profileSlice';
import { toolsApi } from 'services/toolsApi';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReduser,
  profile: profileReducer,
  [authApi.reducerPath]: authApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [toolsApi.reducerPath]: toolsApi.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authApi.middleware,
        profileApi.middleware,
        toolsApi.middleware
      ),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
setupListeners(store.dispatch);
