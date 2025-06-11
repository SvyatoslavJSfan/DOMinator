import type { Preview, Decorator } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

initialize()

// 20:49

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        msw: {
            handlers: []
        }
    },
};



export const decorators: Decorator[] = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    mswDecorator
]

export default preview;