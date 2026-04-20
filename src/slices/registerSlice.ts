import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api/rootApi';

export interface RegisterState {
  user: User | null;
}

const initialState: RegisterState = {
  user: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<RegisterState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = registerSlice.actions;
export default registerSlice.reducer;
