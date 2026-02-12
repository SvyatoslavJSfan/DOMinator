import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AddImageForm.module.scss';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input/Input';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { ToggleFeatures } from '@/shared/lib/features';

interface AddImageFormProps {
    className?: string;
    onChange?: (value: string) => void
    onAdd?: () => void
    value: string
    onChangeImageCaption?: (value: string) => void
    imageTitle?: string
}

export const AddImageForm = memo(({ className, onChange, onAdd, value, onChangeImageCaption, imageTitle }: AddImageFormProps) => {

    const { t } = useTranslation('articlecreate')

    const redesignedContent = <div className={classNames(cls.AddImageForm, {}, [className])}>
        <InputRedesigned 
            placeholder={t('Введите URL изображения')}
            onChange={onChange}
            value={value}
        />
        <InputRedesigned 
            placeholder={t('Подпись к рисунку')}
            onChange={onChangeImageCaption}
            value={imageTitle}
        />
        <ButtonRedesigned onClick={onAdd}>
            {t('Вставить')}
        </ButtonRedesigned>
    </div>

    const deprecatedContent = <div className={classNames(cls.AddImageForm, {}, [className])}>
        <InputDeprecated 
            placeholder={t('Введите URL изображения')}
            onChange={onChange}
            value={value}
        />
        <InputDeprecated 
            placeholder={t('Подпись к рисунку')}
            onChange={onChangeImageCaption}
            value={imageTitle}
        />
        <ButtonDeprecated onClick={onAdd}>
            {t('Вставить')}
        </ButtonDeprecated>
    </div>

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                redesignedContent
            }
            off={
                deprecatedContent
            }
        />
    );
})