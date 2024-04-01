import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';

interface CurrencySelectProps {
    className?: string
    label?: string
    value?: string
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options: SelectOption[] = [
    { content: Currency.EUR, value: Currency.EUR },
    { content: Currency.RUB, value: Currency.RUB },
    { content: Currency.USD, value: Currency.USD },
];

const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, label, onChange, value, readonly = true,
    } = props;
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, []);
    return (
        <Select
            className={classNames(className, {})}
            value={value}
            label={label}
            onChange={onChangeHandler}
            readonly={readonly}
            options={options}
        />
    );
});
export { CurrencySelect };
