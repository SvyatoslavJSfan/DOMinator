/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleBlockType, ArticleCodeBlock } from '@/entities/Article';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { UpdateArticleCodeBlock } from './UpdateArticleCodeBlock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const codeBlock:  ArticleCodeBlock = {
    id: '1',
    type: ArticleBlockType.CODE,
    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Обновленное содержимое блока.";\n    </script>\n  </body>\n</html>;'
} 

const meta: Meta<typeof UpdateArticleCodeBlock> = {
    title: 'features/UpdateArticleForm/UpdateArticleCodeBlock',
    component: UpdateArticleCodeBlock,
    parameters: {},
 
    tags: ['autodocs'],
 
    args: {
        onChangeCodeBlockContent: fn(),
        block: codeBlock
    },
};

export default meta;
type Story = StoryObj<typeof UpdateArticleCodeBlock>;




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
