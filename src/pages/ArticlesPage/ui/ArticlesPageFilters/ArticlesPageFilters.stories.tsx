/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';


const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {},
 
    tags: ['autodocs'],
 
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;


export const Normal: Story = {
    args: {},
};

Normal.decorators = [ StoreDecorator({}) ]

