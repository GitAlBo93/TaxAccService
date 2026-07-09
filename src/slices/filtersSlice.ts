import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExpenseFilters {
  clientId: string;
  clientContractId: string;
  assetId: string;
  startDate: string;
  endDate: string;
  status: string;
}

type State = {
  isApplied: boolean;
  filters: ExpenseFilters;
};

export const initialFilters: ExpenseFilters = {
  clientId: '',
  clientContractId: '',
  assetId: '',
  startDate: '',
  endDate: '',
  status: '',
};

export const initialState: State = {
  filters: initialFilters,
  isApplied: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFilters: () => initialState,
    updateFilters: (state, action: PayloadAction<Partial<ExpenseFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.isApplied = true;
    },
  },
  selectors: {
    getFilters: (state: State) => state.filters,
    getIsApplied: (state: State) => state.isApplied,
  },
});

export const { resetFilters, updateFilters } = filtersSlice.actions;
export const { getFilters, getIsApplied } = filtersSlice.selectors;
export default filtersSlice.reducer;
