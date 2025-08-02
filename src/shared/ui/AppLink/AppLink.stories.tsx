/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/shared/const/theme';



const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: {
        to: '/'
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;


export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};


export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
};


export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED
    },
};

// ------------DARK-----------------
export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED
    },
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)]


