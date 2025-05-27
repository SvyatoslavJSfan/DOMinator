/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ListBox } from './ListBox';



const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: {
    },

    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;


export const Normal: Story = {
    args: {
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
};


