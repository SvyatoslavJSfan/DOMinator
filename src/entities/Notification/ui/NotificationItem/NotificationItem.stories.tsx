/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';



const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
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
type Story = StoryObj<typeof NotificationItem>


export const Primary: Story = {
    args: {},
}