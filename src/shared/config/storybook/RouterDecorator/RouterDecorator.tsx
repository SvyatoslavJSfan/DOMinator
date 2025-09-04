import React from 'react';
import { StoryFn } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom';


export const RouterDecorator = (StoryComponent: StoryFn ) => (
    <MemoryRouter>
        <StoryComponent />
    </MemoryRouter>
)
