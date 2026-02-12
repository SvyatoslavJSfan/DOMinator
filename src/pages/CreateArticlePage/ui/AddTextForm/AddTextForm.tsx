import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AddTextForm.module.scss';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextArea as TextAreaRedesigned } from '@/shared/ui/redesigned/TextArea';
import { TextArea as TextAreaDeprecated } from '@/shared/ui/deprecated/TextArea';
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input';
import { Input as InputDepecaed } from '@/shared/ui/deprecated/Input';
import { ToggleFeatures } from '@/shared/lib/features';

interface AddTextFormProps {
    className?: string;
    onChange?: (value: string) => void
    onAdd?: () => void
    onChangeTextBlockTitle?: (value: string) => void
}

export const AddTextForm = memo(({ className, onChange, onAdd, onChangeTextBlockTitle }: AddTextFormProps) => {

    const { t } = useTranslation('articlecreate')

    const redesignedContent = <div className={classNames(cls.AddTextForm, {}, [className])}>
        <InputRedesigned 
            onChange={onChangeTextBlockTitle}
            placeholder={t('Введите название абзаца')}
            className={cls.paragraphTitle}
        />
        <TextAreaRedesigned
            onChange={onChange}
            placeholder={t('Введите текст статьи')}
        />
        <ButtonRedesigned onClick={onAdd}>
            {t('Добавить')}
        </ButtonRedesigned>
    </div>

    const deprecatedContent = <div className={classNames(cls.AddTextForm, {}, [className])}>
        <InputDepecaed 
            onChange={onChangeTextBlockTitle}
            placeholder={t('Введите название абзаца')}
            className={cls.paragraphTitle}
        />
        <TextAreaDeprecated
            onChange={onChange}
            placeholder={t('Введите текст статьи')}
        />
        <ButtonDeprecated onClick={onAdd}>
            {t('Добавить')}
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