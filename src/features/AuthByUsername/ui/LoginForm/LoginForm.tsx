import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {

    const { t } = useTranslation()
    const dispath = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispath(loginActions.setUsername(value))
    }, [dispath])

    const onChangePassword = useCallback((value: string) => {
        dispath(loginActions.setPassword(value))
    }, [dispath])

    const onLoginClick = useCallback(() => {
        dispath(loginByUsername({ username, password }))
    }, [dispath, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text text={t('Неверный логин или пароль')} theme={TextTheme.ERROR}/>}
            <Input 
                type='text' 
                className={cls.input} 
                placeholder={t('Введите имя')}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input 
                type='text'
                className={cls.input} 
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button 
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
})