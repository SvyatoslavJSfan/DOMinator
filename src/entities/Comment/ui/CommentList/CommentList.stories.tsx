import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';



const meta: Meta<typeof CommentList> = {
    title: 'entities/CommentList',
    component: CommentList,
    parameters: {
        backgroundColor: { control: 'color' },
    },
 
    tags: ['autodocs'],
 
    argTypes: {
    },
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;


export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' },
            },
            {
                id: '2',
                text: 'Comment 2',
                user: { id: '1', username: 'Petya' },
            },
        ],
    }
}

Primary.decorators = [StoreDecorator({})]

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true
    }
}

Loading.decorators = [StoreDecorator({})]

