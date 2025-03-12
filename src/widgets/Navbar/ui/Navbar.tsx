/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss'


interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return ( 
        <div className={classNames(cls.Navbar, {}, [className])}>
            
            <Button 
                theme={ThemeButton.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal} >
                {t('Lorem')}
            </Modal>
        </div>
    );
}


 
