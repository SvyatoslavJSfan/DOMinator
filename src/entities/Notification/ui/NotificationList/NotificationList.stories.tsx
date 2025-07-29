/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';



const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: {  },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' }
            }
        })
    ]
}

export default meta;
type Story = StoryObj<typeof NotificationList>


export const Primary: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                // @ts-ignore
                rest.get(`${__API_URL__}/notifications`, (req, res, ctx) => res(
                    ctx.status(200),
                    ctx.json([
                        { 
                            id: '1',
                            title: 'Notification 1',
                            description: 'New article about JS'
                        },
                        { 
                            id: '2',
                            title: 'Notification 2',
                            description: 'New article about Python'
                        },
                        { 
                            id: '3',
                            title: 'Notification 3',
                            description: 'New article about Kotlin'
                        },
                    ])
                )),
            ],
        },
    },
}