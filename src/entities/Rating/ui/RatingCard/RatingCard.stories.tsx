/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';


const meta: Meta<typeof RatingCard> = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
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
type Story = StoryObj<typeof RatingCard>;


export const Primary: Story = {
    args: { },
};





