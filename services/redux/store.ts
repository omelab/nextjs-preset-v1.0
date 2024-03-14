import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import api from '@/services/redux/api';
import authReducer from '@/modules/Auth/slices/authSlice';
import scrollReducer from '@/services/redux/scrollSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  scrl: scrollReducer,
  auth: authReducer,
  // other reducers...
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
