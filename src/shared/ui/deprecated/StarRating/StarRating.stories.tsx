/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';



const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
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
type Story = StoryObj<typeof StarRating>;


export const Primary: Story = {
    args: { },
};





