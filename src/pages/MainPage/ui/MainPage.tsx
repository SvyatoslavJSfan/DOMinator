import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation();
    

    return (
        <Page data-testid='MainPage'>
            {t('Главная')}
            <div>123</div>
        </Page>

    );
};

export default MainPage;
