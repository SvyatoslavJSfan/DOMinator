import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { fetchProfileData, getProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadOnly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, ValidateProfileError } from '../../../entities/Profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {

    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadOnly)
    const validateErrors = useSelector(getProfileValidateErrors)
    const { id } = useParams<{id: string}>()

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Проверьте правильность написания страны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.NO_DATA]: t('Данные не могут быть пустыми'),
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                {
                    validateErrors?.length && validateErrors.map(err => 
                        <Text 
                            key={err}
                            theme={TextTheme.ERROR} 
                            text={validateErrorsTranslate[err]}
                        />)
                }
                <ProfileCard 
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>

    );
}

export default ProfilePage