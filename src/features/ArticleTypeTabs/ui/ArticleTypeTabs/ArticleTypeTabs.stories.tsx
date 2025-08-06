/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';


const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'pages/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    parameters: {},
 
    tags: ['autodocs'],
 
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;


export const Normal: Story = {
    args: {},
};


