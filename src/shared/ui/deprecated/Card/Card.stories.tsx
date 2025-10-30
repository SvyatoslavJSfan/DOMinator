/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text } from '../Text/Text';
import { Card } from './Card';


const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    parameters: {
  
    },
 
    tags: ['autodocs'],
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof Card>;


export const Primary: Story = {
    args: {
        children: <Text title="test" text="lorem ipsum dolor sit amet"/>
    },
};



