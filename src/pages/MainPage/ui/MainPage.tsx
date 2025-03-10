import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    console.log('hi');
    

    return (
        <div>
            {t('Главная')}
            <BugButton/>
        </div>
    );
};

export default MainPage;
