import {
  ExpensesPageConteiner,
  HeaderExpensesPage,
  ExpensesPageLayout,
  InformationTextConteiner,
  HeaderRightExpenses,
  HeaderLeftExpenses,
} from './ExpensesPage.styles';
import { SystemArrowLeftOutline, ServiceInfoSolid, SystemFilterOutline, SystemSettingsOutline } from '@admiral-ds/icons';
import { Link, T, Button } from '@admiral-ds/react-ui';
import { RouteEnum } from '../../app/constants';

export const ExpensesPage = () => {
  return (
    <ExpensesPageConteiner>
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
          <Button dimension="m" appearance="secondary" iconStart={<SystemFilterOutline />}>
            Фильтр
          </Button>
          <Button dimension="m" appearance="secondary" displayAsSquare iconStart={<SystemSettingsOutline />}></Button>
        </HeaderRightExpenses>
      </HeaderExpensesPage>
      <ExpensesPageLayout>
        <InformationTextConteiner>
          <ServiceInfoSolid width={24} />{' '}
          <T font="Additional/XS" color="Neutral/Neutral 50">
            Для отображения информации уточните параметры поиска.
          </T>
        </InformationTextConteiner>
        <Button dimension="l" appearance="secondary" iconStart={<SystemFilterOutline />}>
          Фильтр
        </Button>
      </ExpensesPageLayout>
    </ExpensesPageConteiner>
  );
};
