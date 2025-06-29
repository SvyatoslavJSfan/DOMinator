/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {

    const { 
        children, 
        className, 
        to, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps 
    } = props

    return (
        <Link 
            to={to} 
            className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
})