import { RouteEnum } from '../../app/constants';

export const useServicesForm = () => {
  const services = [
    { key: 'Reports', label: 'Отчёты' },
    { key: 'expenses', label: 'Затраты', route: RouteEnum.expenses },
    { key: 'Tasks', label: 'Задания ФР/НОБ/Переквитовки' },
    { key: 'ManualTaxRefund', label: 'Ручной возврат налога' },
    { key: 'AccountingIIS', label: 'Учётные данные по ИИС по переводу от другого брокера' },
    { key: 'VarketSettlementQuotes', label: 'Рыночные и расчётные котировки для налогооблажения' },
    { key: 'MatBenefits', label: 'Сделки на ручной разбор для расчёта мат.выгоды' },
    { key: 'DailyVerificationReports', label: 'Ежедневные сверочные отчёты' },
    { key: 'ReferencePersonalIncomTax', label: 'Справка 6-НДФЛ' },
    { key: 'SendingNOBReport', label: 'Рассылка отчёта НОБ' },
  ] as const;

  return { services };
};
