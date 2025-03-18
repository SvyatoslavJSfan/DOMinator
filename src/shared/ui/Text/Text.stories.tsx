/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';


const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
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
type Story = StoryObj<typeof Text>;


export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet'
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet',
        theme: TextTheme.ERROR
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet'
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet'
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet'
    },
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

