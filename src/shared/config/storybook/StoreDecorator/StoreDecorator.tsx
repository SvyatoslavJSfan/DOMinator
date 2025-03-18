import React, { Suspense } from 'react';
import 'app/styles/index.scss'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';



export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn ) => (
    <StoreProvider initialState={state}>
        <Suspense fallback=''>
            <StoryComponent/>
        </Suspense>
        
    </StoreProvider>

)

