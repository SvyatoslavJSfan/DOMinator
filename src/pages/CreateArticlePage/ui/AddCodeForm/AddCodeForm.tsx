import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AddCodeForm.module.scss';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextArea as TextAreaRedesigned } from '@/shared/ui/redesigned/TextArea';
import { TextArea as TextAreaDeprecated } from '@/shared/ui/deprecated/TextArea';
import { ToggleFeatures } from '@/shared/lib/features';

interface AddCodeFormProps {
    className?: string;
    onChange?: (value: string) => void
    onAdd?: () => void
}



export const AddCodeForm = memo(({ className, onChange, onAdd }: AddCodeFormProps) => {

    const { t } = useTranslation('articlecreate')

    const redesignedContent = <div className={classNames(cls.AddCodetForm, {}, [className])}>
        <TextAreaRedesigned
            onChange={onChange}
            placeholder={t('Введите фрагмент кода')}
        />
        <ButtonRedesigned onClick={onAdd}>
            {t('Вставить')}
        </ButtonRedesigned>
    </div>

    const deprecatedContent = <div className={classNames(cls.AddCodetForm, {}, [className])}>
        <TextAreaDeprecated
            onChange={onChange}
            placeholder={t('Введите фрагмент кода')}
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