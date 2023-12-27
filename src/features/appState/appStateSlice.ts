import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  value: string;
}

const initialState: AppState = { value: '' };

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: { setAppState: (state, action: PayloadAction<string>) => { state.value = action.payload; } },
});

export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;
