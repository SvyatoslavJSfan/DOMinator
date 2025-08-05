/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';




const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {

    },
 
    tags: ['autodocs'],

    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ]
 
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;


export const Primary: Story = {
    args: {
    },
};





