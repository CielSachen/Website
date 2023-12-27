import { configureStore } from '@reduxjs/toolkit';

import appStateSliceReducer from '../features/appState/appStateSlice';

export const store = configureStore({ reducer: { appState: appStateSliceReducer } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
