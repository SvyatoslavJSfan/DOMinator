/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';



const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {},
 
    tags: ['autodocs'],
 
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;



export const Normal: Story = {
    args: {
    },
};

