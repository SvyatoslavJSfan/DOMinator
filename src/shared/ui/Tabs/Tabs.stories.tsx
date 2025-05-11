/* eslint-disable i18next/no-literal-string */
/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs';




const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
  
    },
 
    tags: ['autodocs'],
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;


export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab 1',
            },
            {
                value: 'tab 2',
                content: 'tab 2',
            },
            {
                value: 'tab 3',
                content: 'tab 3',
            },
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
};



