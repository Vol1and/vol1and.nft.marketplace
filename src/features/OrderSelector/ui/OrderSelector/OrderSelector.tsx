import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import cls from './OrderSelector.module.scss';

interface OrderSelectorProps {
    className?: string
    value: SortOrder
    onChange: (value: SortOrder) => void
}

const OrderSelector = memo(({ className, onChange, value }: OrderSelectorProps) => {
    const { t } = useTranslation();
    const options = useMemo<SelectOption<SortOrder>[]>(() => [
        { value: 'asc', content: t('возрастанию') },
        { value: 'desc', content: t('убыванию') },
    ], [t]);
    return (
        <div className={classNames(className, {}, [cls.OrderSelector])}>
            <Select options={options} label={t('Сортировать по')} value={value} onChange={onChange} />
        </div>
    );
});
export { OrderSelector };
