import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';



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

const normalArgs = {
    comment:             {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    }
}


export const Primary: Story = {
    args: normalArgs
}

export const PrimaryRedesigned: Story = {
    args: normalArgs
}

PrimaryRedesigned.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })]


export const Loading: Story = {
    args: normalArgs
}

