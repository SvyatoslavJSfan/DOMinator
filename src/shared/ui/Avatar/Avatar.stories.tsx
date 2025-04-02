/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from './avatar.png';
import { Avatar } from './Avatar';




const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {

    },
 
    tags: ['autodocs'],
 
};

export default meta;
type Story = StoryObj<typeof Avatar>;


export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg
    },
};




