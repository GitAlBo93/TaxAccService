import { FC } from 'react';
import { Button, Option } from '@admiral-ds/react-ui';
import { Controller } from 'react-hook-form';
import { useExpensesFilterModal } from './useExpensesFilterModal';
import {
  ContainerButton,
  ContainerForm,
  ContainerHeader,
  CustomDateField,
  CustomInputField,
  CustomModal,
  CustomModalTitle,
  CustomSelectField,
  ExpensesFilterModalContainer,
  overlayStyles,
} from './ExpensesFilterModal.styles';
import { ServiceCloseOutline } from '@admiral-ds/icons';

// TODO: исправить типизацию Filters
type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const stateOptions = [
  { value: 'New', name: 'Новый' },
  { value: 'Confirmed', name: 'Подтвержденный' },
  { value: 'Canceled', name: 'Отмененный' },
];

export const ExpensesFilterModal: FC<FilterModalProps> = ({ onClose }) => {
  const { control, errors, handleSubmit, handleFiltersChange, resetFiltersForm } = useExpensesFilterModal(onClose);

  const renderStateOptions = () => {
    return stateOptions.map((state, key) => (
      <Option key={key} value={state.value}>
        {state.name}
      </Option>
    ));
  };

  return (
    <CustomModal overlayStyledCss={overlayStyles} displayCloseIcon={false}>
      <ContainerHeader>
        <CustomModalTitle>Фильтры</CustomModalTitle>
        <ServiceCloseOutline width={24} onClick={onClose} />
      </ContainerHeader>

      <ExpensesFilterModalContainer onSubmit={handleSubmit(handleFiltersChange)}>
        <ContainerForm>
          <Controller
            name="clientId"
            control={control}
            render={({ field }) => (
              <CustomInputField
                {...field}
                label="Субсчёт клиента"
                placeholder="123456"
                status={errors.clientId ? 'error' : undefined}
                extraText={errors.clientId?.message}
              />
            )}
          />
          <Controller
            name="clientContractId"
            control={control}
            render={({ field }) => (
              <CustomInputField
                {...field}
                label="Номер договора"
                placeholder="123456"
                status={errors.clientContractId ? 'error' : undefined}
                extraText={errors.clientContractId?.message}
              />
            )}
          />
          <Controller
            name="assetId"
            control={control}
            render={({ field }) => (
              <CustomInputField
                {...field}
                label="Актив"
                placeholder="123456"
                status={errors.assetId ? 'error' : undefined}
                extraText={errors.assetId?.message}
              />
            )}
          />
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <CustomDateField
                {...field}
                type="date"
                label="Начальная дата перевода ЦБ"
                required
                placeholder="01.01.2001"
                status={errors.startDate ? 'error' : undefined}
                extraText={errors.startDate?.message}
              />
            )}
          />
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <CustomDateField
                {...field}
                label="Конечная дата перевода ЦБ"
                required
                placeholder="02.01.2001"
                status={errors.endDate ? 'error' : undefined}
                extraText={errors.endDate?.message}
              />
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <CustomSelectField {...field} placeholder="Новый" label="Статус">
                {renderStateOptions()}
              </CustomSelectField>
            )}
          />
        </ContainerForm>

        <ContainerButton>
          <Button dimension="l" appearance="secondary" onClick={() => resetFiltersForm()}>
            Сбросить
          </Button>
          <Button dimension="l" appearance="secondary" onClick={onClose}>
            Отмена
          </Button>
          <Button dimension="l" type="submit">
            Применить
          </Button>
        </ContainerButton>
      </ExpensesFilterModalContainer>
    </CustomModal>
  );
};
