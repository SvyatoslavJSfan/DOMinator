/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ErrorPage } from './ErrorPage';



const meta: Meta<typeof ErrorPage> = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
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
type Story = StoryObj<typeof ErrorPage>;


export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]



