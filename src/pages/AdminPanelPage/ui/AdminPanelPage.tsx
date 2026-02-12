import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { AppLink as AppLinkRedesigned } from '@/shared/ui/redesigned/AppLink';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { ToggleFeatures } from '@/shared/lib/features';
import { getRouteArticleCreate } from '@/shared/const/router';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import cls from './AdminPanelPage.module.scss';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Page data-testid='AdminPanelPage'>
                    <TextRedesigned 
                        className={cls.adminPanelHeader}
                        title={t('Админ панель')}
                    />
                    <AppLinkRedesigned 
                        to={getRouteArticleCreate()}
                    >
                        {t('Создать статью')}
                    </AppLinkRedesigned>
                </Page>
            }
            off={
                <Page data-testid='AdminPanelPage'>
                    <TextDeprecated 
                        className={cls.adminPanelHeader}
                        title={t('Админ панель')}
                    />
                    <AppLink 
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        {t('Создать статью')}
                    </AppLink>
                </Page>
            }
        />

    );
};

export default AdminPanelPage;
