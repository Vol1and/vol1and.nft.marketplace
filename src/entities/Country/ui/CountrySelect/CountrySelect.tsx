import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Country } from '../../model/const/country';

interface CountrySelectProps {
    className?: string
    label?: string
    value?: string
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options: SelectOption[] = [
    { content: Country.Russia, value: Country.Russia },
    { content: Country.Canada, value: Country.Canada },
];

const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, label, onChange, value, readonly = true,
    } = props;
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
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
export { CountrySelect };
