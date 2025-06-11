/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';



const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {},
 
    tags: ['autodocs'],
 
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof MainPage>;


export const Normal: Story = {
    args: {},
};

Normal.decorators = [StoreDecorator({})]

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
