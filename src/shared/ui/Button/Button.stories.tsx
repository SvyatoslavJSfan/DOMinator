/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';



const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
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
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    args: {
        children: 'Text',
    },
};


export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    },
};


export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
};

export const OutlinedSizeL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.L
    },
};

export const OutlinedSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.XL
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND
    },
};

export const InvertedBackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true
    },
};


export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    },
};

