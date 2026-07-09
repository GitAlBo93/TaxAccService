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
import { useSelector } from 'react-redux';
import { getIsApplied } from '../../slices/filtersSlice';

export const ExpensesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isApplied = useSelector(getIsApplied);

  const openFiltersModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeFiltersModal = useCallback(() => {
    setIsModalOpen(false);
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
          <Button dimension="m" appearance="secondary" iconStart={<SystemFilterOutline />} onClick={openFiltersModal}>
            Фильтр
          </Button>
          <Button dimension="m" appearance="secondary" displayAsSquare iconStart={<SystemSettingsOutline />}></Button>
        </HeaderRightExpenses>
      </HeaderExpensesPage>
      {!isApplied ? (
        <ExpensesPageLayout>
          <InformationTextContainer>
            <ServiceInfoSolid width={24} />
            <T font="Additional/XS" color="Neutral/Neutral 50">
              Для отображения информации уточните параметры поиска.
            </T>
          </InformationTextContainer>
          <Button dimension="l" appearance="secondary" iconStart={<SystemFilterOutline />} onClick={openFiltersModal}>
            Фильтр
          </Button>
        </ExpensesPageLayout>
      ) : (
        <T font="Additional/XS" color="Neutral/Neutral 50">
          Тут должна быть таблица с данными
        </T>
      )}
      {isModalOpen && <ExpensesFilterModal isOpen={isModalOpen} onClose={closeFiltersModal} />}
    </ExpensesPageContainer>
  );
};
