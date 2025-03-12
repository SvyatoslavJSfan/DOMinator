/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

import { Modal } from './Modal';



const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
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
type Story = StoryObj<typeof Modal>;


export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nobis modi enim quasi soluta placeat praesentium et quis ipsum. Fuga architecto voluptatibus ipsa est asperiores vitae cum consectetur. Illo, maxime!',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nobis modi enim quasi soluta placeat praesentium et quis ipsum. Fuga architecto voluptatibus ipsa est asperiores vitae cum consectetur. Illo, maxime!',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]




