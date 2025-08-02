import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';



export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error('Ошибка!');
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('cause problems')}
        </Button>
    );
};
