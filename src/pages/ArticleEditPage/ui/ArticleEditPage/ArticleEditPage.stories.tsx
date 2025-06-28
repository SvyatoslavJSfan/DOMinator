/* eslint-disable i18next/no-literal-string */
/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';




const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
  
    },
 
    tags: ['autodocs'],
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;


export const Primary: Story = {
    args: {},
};

Primary.decorators = [
    StoreDecorator({
    })
]


