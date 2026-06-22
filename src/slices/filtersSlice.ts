import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    applyFilters: (state, action: PayloadAction<ExpenseFilters>) => {
      return action.payload;
    },
    resetFilters: () => initialState,
    updateFilters: (state, action: PayloadAction<Partial<ExpenseFilters>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { applyFilters, resetFilters, updateFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
