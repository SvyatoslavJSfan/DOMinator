import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';
import { CommentCard } from './CommentCard';



const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,
    parameters: {
        backgroundColor: { control: 'color' },
    },
 
    tags: ['autodocs'],
 
    argTypes: {
    },
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;


export const Primary: Story = {
    args: {
        comment:             {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        }
    }
}


export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        isLoading: true
    },
    
}

