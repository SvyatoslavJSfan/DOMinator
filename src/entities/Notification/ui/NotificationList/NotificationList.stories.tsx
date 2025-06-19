/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';



const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationList,
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
type Story = StoryObj<typeof NotificationList>


export const Primary: Story = {
    args: {},
}