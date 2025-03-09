import React from 'react';
import type { Preview, Decorator } from '@storybook/react'
import { Theme } from '../../src/app/providers/themeProvider';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const decorators: Decorator[] = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator
]

export default preview;