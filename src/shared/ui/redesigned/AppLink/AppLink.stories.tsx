/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';



const meta: Meta<typeof AppLink> = {
    title: 'shared/redesigned/AppLink',
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
        variant: 'primary',
    },
};


export const Red: Story = {
    args: {
        children: 'Text',
        variant: 'red'
    },
};


// ------------DARK-----------------
export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        variant: 'primary',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]


export const RedDark: Story = {
    args: {
        children: 'Text',
        variant: 'red'
    },
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)]


