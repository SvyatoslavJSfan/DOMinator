import React from 'react';
import 'app/styles/index.scss'
import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/themeProvider';


export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn ) => (
    <div className={`app ${theme}`}>
        <StoryComponent/>
    </div>
)

