/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

const notification: Notification = {
    id: '1',
    title: 'Notification',
    description: 'A new article about JS!'
}


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
  
    args: { 
        item: notification
    },
}

export default meta;
type Story = StoryObj<typeof NotificationItem>


export const Primary: Story = {
    args: {},
}