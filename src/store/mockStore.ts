import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import loginReducer from '@store/reducers/loginSlice';
import userReducer from '@store/reducers/userSlice';
import { profileApi } from '@services/profileApi';

// Define a simple reducer for toolsApi
const toolsApiSlice = createSlice({
  name: 'toolsApi',
  initialState: {},
  reducers: {},
});

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  profile: profileApi.reducer,
  toolsApi: toolsApiSlice.reducer, // Include the toolsApi reducer
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      (getDefaultMiddleware() as Middleware[]).concat(profileApi.middleware),
  });
};

export const mockStore = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
setupListeners(mockStore.dispatch);
