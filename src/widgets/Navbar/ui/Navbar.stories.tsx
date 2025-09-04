/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line unused-imports/no-unused-imports
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';



const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
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
type Story = StoryObj<typeof Navbar>;


export const Light: Story = {
    args: {},
};

Light.decorators = [StoreDecorator({
    loginForm: { username: 'username', password: 'password' }
})]

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: 'username', password: 'password' }
})]

export const AuthNavbar: Story = {
    args: {},
};

AuthNavbar.decorators = [StoreDecorator({
    user: { authData: {} }
})]



