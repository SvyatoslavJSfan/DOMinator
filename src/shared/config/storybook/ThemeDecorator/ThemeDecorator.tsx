import React from 'react';
import { StoryFn } from '@storybook/react'
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line path-fixer-tralnotipsus/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';


// eslint-disable-next-line path-fixer-tralnotipsus/layer-imports





export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn ) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    </ThemeProvider>

)

