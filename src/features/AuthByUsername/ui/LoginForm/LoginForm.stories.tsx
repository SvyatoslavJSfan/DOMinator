/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';




const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;


export const Primary: Story = {
    args: {
    },
};

Primary.decorators = [StoreDecorator({
    loginForm: { username: 'username', password: 'password' }
})]


export const WithError: Story = {
    args: {
    },
};

WithError.decorators = [StoreDecorator({
    loginForm: { username: 'username', password: 'password', error: 'error' }
})]

export const Loading: Story = {
    args: {
    },
};

Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true }
})]


