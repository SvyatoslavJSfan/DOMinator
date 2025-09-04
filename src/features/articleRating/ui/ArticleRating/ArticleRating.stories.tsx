/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' }, 
            },
        }),
    ],
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        msw: {
            handlers: [
                rest.get('https://testapi.ru/article-ratings', (req, res, ctx) => {
                    const userId = req.url.searchParams.get('userId');
                    const articleId = req.url.searchParams.get('articleId');

                    if (userId === '1' && articleId === '1') {
                        return res(ctx.status(200), ctx.json([{ rate: 3 }]));
                    }

                    return res(ctx.status(200), ctx.json([]));
                }),
            ],
        },
    },
};

export const WithoutRate: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        msw: {
            handlers: [
                rest.get('https://testapi.ru/article-ratings', (req, res, ctx) => {
                    const userId = req.url.searchParams.get('userId');
                    const articleId = req.url.searchParams.get('articleId');

                    if (userId === '1' && articleId === '1') {
                        return res(ctx.status(200), ctx.json([]));
                    }

                    return res(ctx.status(200), ctx.json([]));
                }),
            ],
        },
    },
};

export const Loading: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        msw: {
            handlers: [
                rest.get('https://testapi.ru/article-ratings', (req, res, ctx) =>
                    res(ctx.status(200), ctx.delay(2000), ctx.json([])) 
                ),
            ],
        },
    },
};








/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react'
// import type { Meta, StoryObj } from '@storybook/react';
// import { rest } from 'msw';
// import ArticleRating from './ArticleRating';
// import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';


// const meta: Meta<typeof ArticleRating> = {
//     title: 'features/ArticleRating',
//     component: ArticleRating,
//     parameters: {
  
//         // layout: 'centered',
//     },
 
//     tags: ['autodocs'],
 
//     // argTypes: {
//     //     backgroundColor: { control: 'color' },
//     // },
  
//     args: {  },
//     decorators: [
//         StoreDecorator({
//             user: {
//                 authData: { id: '1' }
//             }
//         })
//     ]
// };

// export default meta;
// type Story = StoryObj<typeof ArticleRating>;


// export const Loading: Story = {
//     args: { 
//         articleId: '1'
//     },
//     parameters: {
//         msw: {
//             handlers: [
//                 rest.get('https://testapi.ru/article-ratings', (req, res, ctx) => 
//                 // эмулируем бесконечный лоадинг
//                     new Promise(() => {}) 
//                 ),
//             ],
//         },
//     },
// }

// export const Primary: Story = {
//     args: { 
//         articleId: '1'
//     },
//     parameters: {
//         msw: {
//             handlers: [
//                 rest.get('https://testapi.ru/article-ratings', (req, res, ctx) => {
//                     const articleId = req.url.searchParams.get('articleId')
//                     const userId = req.url.searchParams.get('userId')

//                     if (articleId === '1' && userId === '1') {
//                         return res(ctx.status(200), ctx.json([{ rate: 3 }]))
//                     }

//                     return res(ctx.status(200), ctx.json([]))
//                 }),
//             ],
//         },
//     },
// }

// export const WithoutRate: Story = {
//     args: { 
//         articleId: '1'
//     },
//     parameters: {
//         msw: {
//             handlers: [
//                 rest.get('https://testapi.ru/article-ratings', (req, res, ctx) => {
//                     const articleId = req.url.searchParams.get('articleId')
//                     const userId = req.url.searchParams.get('userId')

//                     if (articleId === '1' && userId === '1') {
//                         return res(ctx.status(200), ctx.json([]))
//                     }

//                     return res(ctx.status(200), ctx.json([]))
//                 }),
//             ],
//         },
//     },
// }









// export const Primary: Story = {
//     args: { 
//         articleId: '1'
//     },
//     parameters: {
//         msw: {
//             handlers: [
//                 // @ts-ignore
//                 rest.get(`${__API_URL__}/article-ratings?userId=1&articleId=1`, (req, res, ctx) => res(
//                     ctx.status(200),
//                     ctx.json([
//                         { rate: 3 },
//                     ])
//                 )),
//             ],
//         },
//     },
// }

// export const Primary: Story = {
//     args: { 
//         articleId: '1',
//     },
//     parameters: {
//         msw: {
//             handlers: [
//                 rest.get('/article-ratings', (req, res, ctx) => {
//                     const articleId = req.url.searchParams.get('articleId')
//                     const userId = req.url.searchParams.get('userId')

//                     if (articleId === '1' && userId === '1') {
//                         return res(ctx.status(200), ctx.json([{ rate: 3 }]))
//                     }

//                     return res(ctx.status(200), ctx.json([]))
//                 }),
//             ],
//         },
//     },
// }

// export const WithoutRate: Story = {
//     args: { 
//         articleId: '1'
//     },
//     parameters: {
//         msw: {
//             handlers: [
//                 // @ts-ignore
//                 rest.get(`${__API_URL__}/article-ratings?userId=1&articleId=1`, (req, res, ctx) => res(
//                     ctx.status(200),
//                     ctx.json([])
//                 )),
//             ],
//         },
//     },
// }







