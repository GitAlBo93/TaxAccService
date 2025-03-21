import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api/authApi';

export interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
