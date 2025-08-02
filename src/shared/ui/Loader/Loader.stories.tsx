/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';
import { Theme } from '@/shared/const/theme';



const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof Loader>;


export const Normal: Story = {
    args: {
        
    },
};


export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]
