/* eslint-disable import/no-extraneous-dependencies */

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';




const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
 
    args: {  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;


export const Primary: Story = {
    args: {
        width: '100%',
        height: 200
    }
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
};

export const PrimaryDark: Story = {
    args: {
        width: '100%',
        height: 200
    }
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
};

CircleDark.decorators = [ThemeDecorator(Theme.DARK)]





