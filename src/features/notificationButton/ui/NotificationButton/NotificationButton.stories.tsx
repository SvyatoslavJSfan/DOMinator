/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line unused-imports/no-unused-imports
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationButton } from './NotificationButton';



const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: {  },
}

export default meta;
type Story = StoryObj<typeof NotificationButton>


export const Primary: Story = {
    args: {},
}