import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '../../../../entities/User';
import { getProfileData, getProfileReadOnly, profileActions, updateProfileData } from '../../../../entities/Profile';
import cls from './ProfilePageHeader.module.scss';


interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id
    const readonly = useSelector(getProfileReadOnly)
    const dispath = useAppDispatch()

    const onEdit = useCallback(() => {
        dispath(profileActions.setReadonly(false))
    }, [dispath])

    const onCancelEdit = useCallback(() => {
        dispath(profileActions.cancelEdit())
    }, [dispath])

    const onSave = useCallback(() => {
        dispath(updateProfileData())
    }, [dispath])


    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <div className={cls.btnWrapper}>
                    { readonly ? (
                        <Button 
                            theme={ThemeButton.OUTLINE}
                            className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                        : (
                            <>
                                <Button 
                                    theme={ThemeButton.OUTLINE_RED}
                                    className={cls.editBtn}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>

                                <Button 
                                    theme={ThemeButton.OUTLINE}
                                    className={cls.saveBtn}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>

                        )
                    }
                </div>
            )}

        </div>
    );
}