/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';



const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    parameters: {
  
    },
 
    tags: ['autodocs'],
 
    args: {  },
};

export default meta;
type Story = StoryObj<typeof Code>;


export const Primary: Story = {
    args: {
        text: `
    const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    parameters: {
  
    },
 
    tags: ['autodocs'],
 
    args: {  },
    };
        `,
    },
};


