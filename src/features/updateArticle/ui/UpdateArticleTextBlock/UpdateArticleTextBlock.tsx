import React, { memo, useMemo } from 'react';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input'
import cls from './UpdateArticleTextBlock.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleTextBlock } from '@/entities/Article';
import { TextArea as TextAreaRedesigned } from '@/shared/ui/redesigned/TextArea';
import { TextArea as TextAreaDeprecated } from '@/shared/ui/deprecated/TextArea';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface UpdateArticleTextBlockProps {
    className?: string
    block?: ArticleTextBlock
    onChangeTextBlockTitle?: (id: string) => (value: string) => void
    onChangeTextBlockContent?: (id: string) => (value: string) => void
}

export const UpdateArticleTextBlock = memo((props: UpdateArticleTextBlockProps) => {

    const {
        className,
        block,
        onChangeTextBlockTitle,
        onChangeTextBlockContent
    } = props

    const handleContentChange = useMemo(() => {
        if (!onChangeTextBlockContent || !block?.id) return undefined;
        return onChangeTextBlockContent(block.id);
    }, [onChangeTextBlockContent, block?.id]);

    return (
        <VStack max gap='16'>
            { block?.title && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<InputRedesigned 
                        onChange={onChangeTextBlockTitle ? onChangeTextBlockTitle(block.id) : undefined}
                        value={block?.title || ''}  
                    />}
                    off={
                        <InputDeprecated
                            onChange={onChangeTextBlockTitle ? onChangeTextBlockTitle(block.id || '') : undefined}
                            value={block?.title || ''}
                        />
                    }
                />
            )}
            {block?.paragraphs.map((paragraph, index) => (
                <ToggleFeatures
                    key={`${block.id}-paragraph-${index}`}
                    feature="isAppRedesigned"
                    on={
                        <TextAreaRedesigned
                            value={paragraph}
                            onChange={handleContentChange}
                        />
                    }
                    off={
                        <TextAreaDeprecated
                            className={cls.textArea}
                            value={paragraph}
                            onChange={handleContentChange}
                        />
                    }
                />
            ))}
        </VStack>
    );
})