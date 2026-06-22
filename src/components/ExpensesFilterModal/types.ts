// pages/ExpensesPage/types.ts
export interface Filters {
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  // Добавьте другие поля фильтрации по необходимости
}

export interface Expense {
  id: number;
  date: string;
  category: string;
  amount: number;
}
