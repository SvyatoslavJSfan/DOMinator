import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Article, ArticleType, ArticleBlockType } from '@/entities/Article'
import { createArticle } from './createArticle'

describe('createArticle.test', () => {

    test('create article success', async () => {
        const user = { id: '1', username: 'testuser' }
        
        const createdArticle: Article = {
            id: '1',
            title: 'Test Article',
            subtitle: 'Test Subtitle',
            img: 'https://example.com/image.jpg',
            user,
            views: 0,
            createdAt: '2/6/2026',
            type: [ArticleType.SCIENCE],
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'Title',
                    paragraphs: ['Para 1']
                }
            ]
        }

        const thunk = new TestAsyncThunk(createArticle, {
            user: {
                authData: user
            },
            newArticle: {
                article: {
                    id: '1',
                    title: 'Test Article',
                    subtitle: 'Test Subtitle',
                    img: 'https://example.com/image.jpg',
                    views: 0,
                    createdAt: '',
                    type: [ArticleType.SCIENCE],
                    blocks: [
                        {
                            id: '1',
                            type: ArticleBlockType.TEXT,
                            title: 'Title',
                            paragraphs: ['Para 1']
                        }
                    ]
                }
            }
        })

        thunk.api.post.mockReturnValue(Promise.resolve({ data: createdArticle }))
        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(createdArticle)
    })

    test('create article with no user data', async () => {
        const thunk = new TestAsyncThunk(createArticle, {
            user: {
                authData: undefined
            },
            newArticle: {
                article: {
                    id: '1',
                    title: 'Test Article',
                    subtitle: 'Test Subtitle',
                    img: 'https://example.com/image.jpg',
                    views: 0,
                    createdAt: '',
                    type: [ArticleType.SCIENCE],
                    blocks: []
                }
            }
        })

        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('create article api error', async () => {
        const user = { id: '1', username: 'testuser' }
        
        const thunk = new TestAsyncThunk(createArticle, {
            user: {
                authData: user
            },
            newArticle: {
                article: {
                    id: '1',
                    title: 'Test Article',
                    subtitle: 'Test Subtitle',
                    img: 'https://example.com/image.jpg',
                    views: 0,
                    createdAt: '',
                    type: [ArticleType.SCIENCE],
                    blocks: []
                }
            }
        })

        thunk.api.post.mockReturnValue(Promise.reject(new Error('Network error')))
        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })

    test('create article with no response data', async () => {
        const user = { id: '1', username: 'testuser' }
        
        const thunk = new TestAsyncThunk(createArticle, {
            user: {
                authData: user
            },
            newArticle: {
                article: {
                    id: '1',
                    title: 'Test Article',
                    subtitle: 'Test Subtitle',
                    img: 'https://example.com/image.jpg',
                    views: 0,
                    createdAt: '',
                    type: [ArticleType.SCIENCE],
                    blocks: []
                }
            }
        })

        thunk.api.post.mockReturnValue(Promise.resolve({ data: undefined }))
        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })

    test('create article with correct api call parameters', async () => {
        const user = { id: '1', username: 'testuser' }
        const title = 'Test Article'
        const subtitle = 'Test Subtitle'
        const img = 'https://example.com/image.jpg'
        const type = [ArticleType.SCIENCE]
        const blocks: Article['blocks'] = []

        const createdArticle: Article = {
            id: '1',
            title,
            subtitle,
            img,
            user,
            views: 0,
            createdAt: '2/6/2026',
            type,
            blocks
        }

        const thunk = new TestAsyncThunk(createArticle, {
            user: {
                authData: user
            },
            newArticle: {
                article: {
                    id: '1',
                    title,
                    subtitle,
                    img,
                    views: 0,
                    createdAt: '',
                    type,
                    blocks
                }
            }
        })

        thunk.api.post.mockReturnValue(Promise.resolve({ data: createdArticle }))
        await thunk.callThunk()

        expect(thunk.api.post).toHaveBeenCalledWith('/articles', expect.objectContaining({
            title,
            subtitle,
            img,
            userId: user.id,
            type,
            blocks,
            views: 0
        }))
    })
})
