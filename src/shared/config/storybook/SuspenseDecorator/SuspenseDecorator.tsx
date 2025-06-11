import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import React from 'react';

export const SuspenseDecorator = (StoryComponent: StoryFn) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
