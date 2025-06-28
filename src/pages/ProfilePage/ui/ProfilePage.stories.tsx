/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';



const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {},
 
    tags: ['autodocs'],
 
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;


export const Normal: Story = {
    args: {},
};

Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            first: 'Svyatoslav',
            lastname: 'Rumyantsev',
            age: 44,
            country: Country.Russia,
            city: 'Verkhnyaya Troitsa',
            currency: Currency.RUB,
        }
    }
})]

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: {
    form: {
        username: 'admin',
        first: 'Svyatoslav',
        lastname: 'Rumyantsev',
        age: 44,
        country: Country.Russia,
        city: 'Verkhnyaya Troitsa',
        currency: Currency.RUB,
    }
} })]
