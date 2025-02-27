import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss'


interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    return ( 
        <div className={classNames(cls.Navbar, {}, [className])}>
            
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О нас</AppLink>
            </div>

        </div>
    );
}


 
