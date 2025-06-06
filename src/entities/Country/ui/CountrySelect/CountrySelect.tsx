import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

import { ListBox } from 'shared/ui/ListBox/ListBox';
import cls from './CurrencySelect.module.scss';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {

    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Укажите страну')}
            items={options}
            readonly={readonly}
            label={t('Укажите страну')}
            direction='top right'
        />
    )

})