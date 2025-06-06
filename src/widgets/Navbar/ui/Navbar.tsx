/* eslint-disable i18next/no-literal-string */
import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '../../../../src/entities/User';
import cls from './Navbar.module.scss'


interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if(authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text 
                    className={cls.appName} 
                    title={t('DOMinator')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink 
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
                    direction="bottom left"
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Админка'),
                            href: RoutePath.admin_panel,
                        }] : []),
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                />
            </header> 
        )

    }
    

    return ( 
        <header className={classNames(cls.Navbar, {}, [className])}>
            
            <Button 
                theme={ThemeButton.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            { isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </header>
    );
})


 
