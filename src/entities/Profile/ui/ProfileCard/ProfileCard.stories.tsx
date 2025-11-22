/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from '@/shared/assets/tests/storybook.jpg'
import { ProfileCard } from './ProfileCard';
import { Country } from '../../../../entities/Country';
import { Currency } from '../../../../entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';



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

const normalArgs = {
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
}

export const Primary: Story = {
    args: normalArgs
};

Primary.decorators = [StoreDecorator({
    loginForm: { username: 'username', password: 'password' }
})]

export const PrimaryRedesigned: Story = {
    args: normalArgs
};

PrimaryRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK)
]

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


