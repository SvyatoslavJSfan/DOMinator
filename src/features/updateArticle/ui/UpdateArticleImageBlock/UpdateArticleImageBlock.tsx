import React, { memo, useMemo } from 'react';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleImageBlock } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface UpdateArticleImageBlockProps {
    className?: string;
    block: ArticleImageBlock
    onChangeImageBlockTitle?: (id: string) => (value: string) => void
    onChangeImageBlockSource?: (id: string) => (value: string) => void
}

export const UpdateArticleImageBlock = memo((props: UpdateArticleImageBlockProps) => {

    const {
        className,
        block,
        onChangeImageBlockSource,
        onChangeImageBlockTitle
    } = props

    const handleTitleChange = useMemo(() => {
        if (!onChangeImageBlockTitle || !block?.id) return undefined;
        return onChangeImageBlockTitle(block.id);
    }, [onChangeImageBlockTitle, block?.id]);

    const handleSourceChange = useMemo(() => {
        if (!onChangeImageBlockSource || !block?.id) return undefined;
        return onChangeImageBlockSource(block.id);
    }, [onChangeImageBlockSource, block?.id]);

    return (
        <VStack max gap='16'>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <InputRedesigned 
                        onChange={handleSourceChange}
                        value={block.src}
                    />
                }
                off={
                    <InputDeprecated 
                        onChange={handleSourceChange}
                        value={block.src}
                    />
                }
            />

            {block.title && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<InputRedesigned 
                        onChange={handleTitleChange}
                        value={block.title}
                    />}
                    off={
                        <InputDeprecated
                            onChange={handleTitleChange}
                            value={block.title}
                        />
                    }
                />
            )}
        </VStack>
    );
})