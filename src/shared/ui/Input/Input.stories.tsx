/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Input } from './Input';




const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Input>;


export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123'
    },
};



