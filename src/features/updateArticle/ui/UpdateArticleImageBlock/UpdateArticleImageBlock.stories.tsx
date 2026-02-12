/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleBlockType, ArticleImageBlock } from '@/entities/Article';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UpdateArticleImageBlock } from './UpdateArticleImageBlock';

const imageBlock:  ArticleImageBlock = {
    id: '1',
    type: ArticleBlockType.IMAGE,
    title: 'Подпись к рисунку',
    src: 'ссылка на изображение'
} 

const meta: Meta<typeof UpdateArticleImageBlock> = {
    title: 'features/UpdateArticleForm/UpdateArticleImageBlock',
    component: UpdateArticleImageBlock,
    parameters: {},
 
    tags: ['autodocs'],
 
    args: {
        onChangeImageBlockSource: fn(),
        onChangeImageBlockTitle: fn(),
        block: imageBlock
    },
};

export default meta;
type Story = StoryObj<typeof UpdateArticleImageBlock>;




export const NormalDeprecated: Story = {
    args: {
       
    },
};

NormalDeprecated.decorators = [StoreDecorator({})]

export const DarkDeprecated: Story = {
    args: {
       
    },
};

DarkDeprecated.decorators = [ThemeDecorator(Theme.DARK)]

export const NormalRedesigned: Story = {
    args: {
        
    },
};

NormalRedesigned.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })]


export const DarkRedesigned: Story = {
    args: {
        
    },
};

DarkRedesigned.decorators = [ThemeDecorator(Theme.DARK), FeaturesFlagsDecorator({ isAppRedesigned: true })]
