import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useOperationsMutation } from '../../api/rootApi';
import { initialState, applyFilters, resetFilters } from '../../slices/filtersSlice';
import { RootState } from '../../app/store';

type ExpensesFilterModalType = {
  clientId: string;
  clientContractId: string;
  assetId: string;
  startDate: string;
  endDate: string;
  status: string;
};

export const useExpensesFilterModal = (onClose?: () => void) => {
  const dispatch = useDispatch();
  const [operations, { isLoading, error }] = useOperationsMutation();

  const savedFilters = useSelector((state: RootState) => state.filters);

  const toISOFormat = (date: string, isEndOfDay: boolean = false) => {
    const [day, month, year] = date.split('.');
    const hours = isEndOfDay ? 23 : 0;
    const minutes = isEndOfDay ? 59 : 0;
    const seconds = isEndOfDay ? 59 : 0;
    const utcTimestamp = Date.UTC(Number(year), Number(month) - 1, Number(day), hours, minutes, seconds);

    return new Date(utcTimestamp).toISOString();
  };

  const shema = object().shape({
    clientId: string().defined(),
    clientContractId: string().defined(),
    assetId: string()
      .defined()
      .test('is-number', 'Должно быть числом', (value) => {
        if (!value) return true;

        return !isNaN(Number(value));
      }),
    startDate: string()
      .required('Обязательное поле')
      .test('not-future', 'Дата не может быть в будущем', (value) => {
        if (!value) return false;

        return new Date(toISOFormat(value)) <= new Date();
      }),
    endDate: string()
      .required('Обязательное поле')
      .test('not-before-startDate', 'Дата окончания не может быть раньше даты начала', function (value) {
        if (!value || !this.parent.startDate) return false;

        return new Date(toISOFormat(value, true)) >= new Date(toISOFormat(this.parent.startDate));
      }),
    status: string().defined(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpensesFilterModalType>({
    defaultValues: savedFilters,
    resolver: yupResolver(shema),
  });

  const resetFiltersForm = () => {
    dispatch(resetFilters());
    reset(initialState);
  };

  const handleFilter = async (data: ExpensesFilterModalType) => {
    const { endDate, startDate, ...children } = data;
    const filteredChildren = Object.fromEntries(
      Object.entries(children).filter(([, value]) => value !== '' && value !== null && value !== undefined),
    );
    const filteredData = {
      requestInfo: {
        id: '123e4567-e89b-12d3-a456-426614174000',
        dateTime: new Date(),
        sourceId: 'WEB_CLIENT',
      },
      startDate: toISOFormat(startDate, false),
      endDate: toISOFormat(endDate, true),
      ...filteredChildren,
    };

    try {
      dispatch(applyFilters(data));
      const response = await operations(filteredData).unwrap();
      console.log(response);
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error('Ошибка регистрации: ', error);
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    handleFilter,
    reset: resetFiltersForm,
    savedFilters,
    isLoading,
    error,
  };
};
