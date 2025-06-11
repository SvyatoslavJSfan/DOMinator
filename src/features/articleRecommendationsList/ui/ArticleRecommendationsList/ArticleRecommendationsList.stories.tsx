/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { Article, ArticleType } from '../../../../entities/Article';

const article: Article = {
    id: '1',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    createdAt: 'Дата создания',
    views: 123,
    user: { id: '1', username: 'Имя пользователя' },
    blocks: [],
    type: [ArticleType.IT],
    title: 'Заголовок статьи',
    subtitle: 'Подзаголовок',
};

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                // @ts-ignore
                rest.get(`${__API_URL__}/articles`, (req, res, ctx) => {
                    const limit = req.url.searchParams.get('_limit');
                    if (limit === '3') {
                        return res(
                            ctx.status(200),
                            ctx.json([
                                { ...article, id: '1' },
                                { ...article, id: '2' },
                                { ...article, id: '3' },
                            ])
                        );
                    }
                    return res(ctx.status(404));
                }),
            ],
        },
    },
    decorators: [StoreDecorator({})],
};
