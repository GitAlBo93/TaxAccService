import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface ExpenseFilters {
  clientId: string;
  clientContractId: string;
  assetId: string;
  startDate: string;
  endDate: string;
  status: string;
}

export const initialState: ExpenseFilters = {
  clientId: '',
  clientContractId: '',
  assetId: '',
  startDate: '',
  endDate: '',
  status: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFilters: () => initialState,
    updateFilters: (state, action: PayloadAction<Partial<ExpenseFilters>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const selectFilters = (state: RootState) => state.filters;

export const { resetFilters, updateFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
