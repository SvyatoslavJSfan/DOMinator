/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from '@/shared/assets/tests/storybook.jpg'
import { ProfileCard } from './ProfileCard';
import { Country } from '../../../../entities/Country';
import { Currency } from '../../../../entities/Currency';



const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
  
        // layout: 'centered',
    },
 
    tags: ['autodocs'],
 
    argTypes: {
        
    },
  
    args: {  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;


export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            first: 'Svyatoslav',
            lastname: 'Rumyantsev',
            age: 44,
            country: Country.Russia,
            city: 'Verkhnyaya Troitsa',
            currency: Currency.RUB,
            avatar
        }
    },
};

Primary.decorators = [StoreDecorator({
    loginForm: { username: 'username', password: 'password' }
})]


export const WithError: Story = {
    args: {
        error: 'error'
    },
};

WithError.decorators = [StoreDecorator({
    loginForm: { username: 'username', password: 'password', error: 'error' }
})]

export const Loading: Story = {
    args: {
        isLoading: true
    },
};

Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true }
})]


