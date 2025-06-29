import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country/model/types/country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { CountrySelect } from '../../../../entities/Country';
import { CurrencySelect } from '../../../../entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    readonly?: boolean
    error?: string
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {

    const { t } = useTranslation('profile')
    const { 
        className, 
        data, 
        isLoading, 
        readonly,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props

    if (isLoading) {
        return (
            <HStack justify='center' max className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])} >
                <Loader/>
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack justify='center' max className={classNames(cls.ProfileCard, { }, [className, cls.error])} >
                <Text 
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])} >
            {
                data?.avatar && (<HStack justify='center' max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar}/>
                </HStack>)
            }
            <Input 
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />

            <Input 
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />

            <Input 
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />

            <Input 
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />

            <Input 
                value={data?.username}
                placeholder={t('Ваше имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />

            <Input 
                value={data?.avatar}
                placeholder={t('Ваша аватарка')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />

            <CurrencySelect 
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />

            <CountrySelect 
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
        
    );
}