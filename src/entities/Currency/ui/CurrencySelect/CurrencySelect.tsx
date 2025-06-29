import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {

    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <ListBox
            className={className}
            onChange={onChangeHandler} 
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            readonly={readonly}
            label={t('Укажите валюту')}
            direction='top right'
        />
    )

})