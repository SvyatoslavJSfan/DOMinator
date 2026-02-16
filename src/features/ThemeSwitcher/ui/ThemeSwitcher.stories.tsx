/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';



const meta: Meta<typeof ThemeSwitcher> = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
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
type Story = StoryObj<typeof ThemeSwitcher>;


export const Normal: Story = {
    args: {
        
    },
};

Normal.decorators = [
    StoreDecorator({})
]

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({})
]
