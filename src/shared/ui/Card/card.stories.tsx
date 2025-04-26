/* eslint-disable i18next/no-literal-string */
/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
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



