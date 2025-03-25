import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api/rootApi';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
