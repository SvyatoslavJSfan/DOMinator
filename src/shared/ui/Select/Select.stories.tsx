/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';




const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    parameters: {

    },
 
    tags: ['autodocs'],
 
};

export default meta;
type Story = StoryObj<typeof Select>;


export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '123', content: 'First item' },
            { value: '1234', content: 'Second item' }
        ]
    },
};





