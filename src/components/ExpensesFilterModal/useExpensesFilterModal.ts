import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { useLazyOperationsQuery } from '../../api/rootApi';
import { updateFilters, getFilters, initialFilters } from '../../slices/filtersSlice';
import { useAppDispatch } from '../../app/hooks';
import { parse } from 'date-fns/parse';
import { endOfDay } from 'date-fns/endOfDay';
import { startOfDay } from 'date-fns/startOfDay';

type ExpensesFilterFormType = {
  clientId: string;
  clientContractId: string;
  assetId: string;
  startDate: string;
  endDate: string;
  status: string;
};

export const useExpensesFilterModal = (onClose?: () => void) => {
  const dispatch = useAppDispatch();
  const [getOperations, { isLoading, error }] = useLazyOperationsQuery();

  const savedFilters = useSelector(getFilters);

  const toISOFormat = (date: string, isEndOfDay: boolean = false) => {
    const parsedDate = parse(date, 'dd.MM.yyyy', new Date());
    const returnDate = isEndOfDay ? endOfDay(parsedDate) : startOfDay(parsedDate);

    return returnDate.toISOString();
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
  } = useForm<ExpensesFilterFormType>({
    defaultValues: savedFilters,
    resolver: yupResolver(shema),
  });

  const resetFiltersForm = () => {
    reset(initialFilters);
  };

  const handleFiltersChange = async (formValues: ExpensesFilterFormType) => {
    const { endDate, startDate, ...filters } = formValues;
    const filteredFilters = Object.fromEntries(
      Object.entries(filters).filter(([, value]) => value !== '' && value !== null && value !== undefined),
    );
    const filteredData = {
      startDate: toISOFormat(startDate, false),
      endDate: toISOFormat(endDate, true),
      ...filteredFilters,
    };

    try {
      dispatch(updateFilters(formValues));
      const response = await getOperations(filteredData).unwrap();
      console.log(response);
      if (onClose) {
        onClose();
      }
    } catch (error) {
      // TODO: отобразить страницу с ошибкой или уведомление
      console.error('Ошибка запроса модального окна "Фильтры": ', error);
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    handleFiltersChange,
    resetFiltersForm,
    savedFilters,
    isLoading,
    error,
  };
};
