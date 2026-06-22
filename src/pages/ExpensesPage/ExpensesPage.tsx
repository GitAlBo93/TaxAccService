import {
  ExpensesPageContainer,
  HeaderExpensesPage,
  ExpensesPageLayout,
  InformationTextContainer,
  HeaderRightExpenses,
  HeaderLeftExpenses,
} from './ExpensesPage.styles';
import { SystemArrowLeftOutline, ServiceInfoSolid, SystemFilterOutline, SystemSettingsOutline } from '@admiral-ds/icons';
import { Link, T, Button } from '@admiral-ds/react-ui';
import { RouteEnum } from '../../app/constants';
import { ExpensesFilterModal } from '../../components/ExpensesFilterModal/ExpensesFilterModal';
import { useCallback, useState } from 'react';
import { Filters } from '../../components/ExpensesFilterModal/types';

export const ExpensesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<Filters | null>(null);
  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleApplyFilters = useCallback((filters: Filters) => {
    setAppliedFilters(filters); // сохраняем фильтры
    setIsModalOpen(false); // закрываем модалку
  }, []);

  return (
    <ExpensesPageContainer>
      <HeaderExpensesPage>
        <HeaderLeftExpenses>
          <Link appearance="primary" dimension="m" href={RouteEnum.services}>
            <SystemArrowLeftOutline width={24} />
            Налоги
          </Link>
          <T font="Main/S" color="Neutral/Neutral 90">
            Затраты
          </T>
        </HeaderLeftExpenses>
        <HeaderRightExpenses>
          <Button dimension="m" appearance="secondary" iconStart={<SystemFilterOutline />} onClick={handleOpenModal}>
            Фильтр
          </Button>
          <Button dimension="m" appearance="secondary" displayAsSquare iconStart={<SystemSettingsOutline />}></Button>
        </HeaderRightExpenses>
      </HeaderExpensesPage>
      {appliedFilters === null ? (
        <ExpensesPageLayout>
          <InformationTextContainer>
            <ServiceInfoSolid width={24} />
            <T font="Additional/XS" color="Neutral/Neutral 50">
              Для отображения информации уточните параметры поиска.
            </T>
          </InformationTextContainer>

          <Button dimension="l" appearance="secondary" iconStart={<SystemFilterOutline />} onClick={handleOpenModal}>
            Фильтр
          </Button>

          {isModalOpen ? (
            <ExpensesFilterModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onApply={handleApplyFilters}
              initialFilters={appliedFilters}
            />
          ) : (
            <div></div>
          )}
        </ExpensesPageLayout>
      ) : (
        <Button onClick={() => setAppliedFilters(null)}>Тут должна быть таблица</Button>
      )}
    </ExpensesPageContainer>
  );
};
