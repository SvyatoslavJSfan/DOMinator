/* eslint-disable i18next/no-literal-string */
/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';



const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetails/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
  
    },
 
    tags: ['autodocs'],
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;


export const Primary: Story = {
    args: {},
};

Primary.decorators = [
    StoreDecorator({
    })
]



