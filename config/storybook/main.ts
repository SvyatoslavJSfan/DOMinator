import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    'stories': [
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    'addons': [
        {
            name: '@storybook/addon-webpack5-compiler-swc',
            options: {
                swcLoaderOptions: {
                    jsc: {
                        transform: {
                            react: {
                                runtime: 'classic',
                            },
                        },
                    },
                },
            },
        },
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-onboarding',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'storybook-addon-mock/register',
        'msw-storybook-addon',
        'storybook-addon-themes'
    ],
    'framework': {
        'name': '@storybook/react-webpack5',
        'options': {}
    },
    'staticDirs': ['public']
};
export default config;

