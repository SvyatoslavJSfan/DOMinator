/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';



const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;


export const Primary: Story = {
    args: {
    },
};

Primary.decorators = [StoreDecorator({})]