import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import { getUserAuthData } from '../../../../entities/User';
import { getProfileData, getProfileReadOnly, profileActions, updateProfileData } from '../../../../entities/Profile';



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
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <div>
                    { readonly ? (
                        <Button 
                            theme={ThemeButton.OUTLINE}
                           
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                        : (
                            <HStack gap='8'>
                                <Button 
                                    theme={ThemeButton.OUTLINE_RED}
                                    
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>

                                <Button 
                                    theme={ThemeButton.OUTLINE}
                                   
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>

                        )
                    }
                </div>
            )}

        </HStack>
    );
}