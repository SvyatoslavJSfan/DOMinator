import React, { memo, useMemo } from 'react';
import { TextArea as TextAreaRedesigned } from '@/shared/ui/redesigned/TextArea';
import { TextArea as TextAreaDeprecated } from '@/shared/ui/deprecated/TextArea';
import { ArticleCodeBlock } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
    onChangeCodeBlockContent?: (id: string) => (value: string) => void
}

export const UpdateArticleCodeBlock = memo((props: ArticleCodeBlockComponentProps) => {

    const {
        className,
        block,
        onChangeCodeBlockContent
    } = props

    const handleContentChange = useMemo(() => {
        if (!onChangeCodeBlockContent || !block?.id) return undefined;
        return onChangeCodeBlockContent(block.id);
    }, [onChangeCodeBlockContent, block?.id]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack max gap='16'>
                    <TextAreaRedesigned 
                        value={block.code}
                        onChange={handleContentChange}
                    />
                </VStack>
            }
            off={
                <VStack max gap='16'>
                    <TextAreaDeprecated 
                        value={block.code}
                        onChange={handleContentChange}
                    />
                </VStack>
            }
        /> 
    )


})