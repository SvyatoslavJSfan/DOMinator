/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';


const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
  
    args: {  },

    decorators: [
        (StoryComponent) => (
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
                <StoryComponent />
            </div>
        ),
        StoreDecorator({
            user: {
                authData: {
                    id: '1' ,
                    username: 'admin',
                    avatar: 'https://avatars.mds.yandex.net/i?id=f7095e3624e592bb57fd599dda2833d6_l-11842117-images-thumbs&n=13',
                    roles: [UserRole.ADMIN] ,
                }
            }
        })
    ]
}

export default meta;
type Story = StoryObj<typeof AvatarDropdown>


export const Primary: Story = {
    args: {},
}