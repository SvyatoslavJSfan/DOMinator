/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';



const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;


export const Light: Story = {
    args: {},
};

Light.decorators = [StoreDecorator({
    user: { authData: {} }
})]


export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} }
})]

export const NoAuth: Story = {
    args: {},
};

NoAuth.decorators = [StoreDecorator({
    user: {  }
})]



