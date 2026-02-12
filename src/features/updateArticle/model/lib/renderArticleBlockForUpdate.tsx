import React from 'react';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { UpdateArticleCodeBlock } from '../../ui/UpdateArticleCodeBlock/UpdateArticleCodeBlock';
import { UpdateArticleImageBlock } from '../../ui/UpdateArticleImageBlock/UpdateArticleImageBlock';
import { UpdateArticleTextBlock } from '../../ui/UpdateArticleTextBlock/UpdateArticleTextBlock';

interface renderArticleBlockForUpdateProps {
    block: ArticleBlock
    onChangeTextBlockTitle?: (id: string) => (value: string) => void
    onChangeTextBlockContent?: (id: string) => (value: string) => void
    onChangeCodeBlockContent?: (id: string) => (value: string) => void
    onChangeImageBlockTitle?: (id: string) => (value: string) => void
    onChangeImageBlockSource?: (id: string) => (value: string) => void
}

export const renderArticleBlockForUpdate = (props: renderArticleBlockForUpdateProps) => {

    const {
        block,
        onChangeTextBlockTitle,
        onChangeTextBlockContent,
        onChangeCodeBlockContent,
        onChangeImageBlockSource,
        onChangeImageBlockTitle
    } = props

    switch (block.type) {
    case ArticleBlockType.CODE:
        return (
            <UpdateArticleCodeBlock
                key={block.id}
                block={block}
                onChangeCodeBlockContent={onChangeCodeBlockContent}
            />
        );
    case ArticleBlockType.IMAGE:
        return (
            <UpdateArticleImageBlock
                key={block.id}
                block={block}
                onChangeImageBlockSource={onChangeImageBlockSource}
                onChangeImageBlockTitle={onChangeImageBlockTitle}
            />
        );
    case ArticleBlockType.TEXT:
        return (
            <UpdateArticleTextBlock
                key={block.id}
                block={block}
                onChangeTextBlockTitle={onChangeTextBlockTitle}
                onChangeTextBlockContent={onChangeTextBlockContent}
            />
        );
    default:
        return null;
    }
};
