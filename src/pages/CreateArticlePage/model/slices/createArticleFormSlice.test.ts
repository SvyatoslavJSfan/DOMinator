import { CreateArticleFormSchema } from '../types/CreateArticleFormSchema'
import { createArticleFormActions, createArticleFormReducer } from './createArticleFormSlice'
import { ArticleType, ArticleBlockType, ArticleBlock } from '@/entities/Article'

describe('createArticleFormSlice.test', () => {
    test('setTitle', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: 'Old Title',
                subtitle: '',
                img: '',
                views: 0,
                createdAt: '',
                type: [],
                blocks: []
            },
            error: undefined
        }

        const newTitle = 'New Title'
        const newState = createArticleFormReducer(state, createArticleFormActions.setTitle(newTitle))

        expect(newState.article?.title).toBe(newTitle)
    })

    test('setSubitle', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: '',
                subtitle: 'Old Subtitle',
                img: '',
                views: 0,
                createdAt: '',
                type: [],
                blocks: []
            },
            error: undefined
        }

        const newSubtitle = 'New Subtitle'
        const newState = createArticleFormReducer(state, createArticleFormActions.setSubitle(newSubtitle))

        expect(newState.article?.subtitle).toBe(newSubtitle)
    })

    test('setImage', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: '',
                subtitle: '',
                img: 'https://old.com/image.jpg',
                views: 0,
                createdAt: '',
                type: [],
                blocks: []
            },
            error: undefined
        }

        const newImage = 'https://new.com/image.jpg'
        const newState = createArticleFormReducer(state, createArticleFormActions.setImage(newImage))

        expect(newState.article?.img).toBe(newImage)
    })

    test('setViews', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: '',
                subtitle: '',
                img: '',
                views: 5,
                createdAt: '',
                type: [],
                blocks: []
            },
            error: undefined
        }

        const newState = createArticleFormReducer(state, createArticleFormActions.setViews())

        expect(newState.article?.views).toBe(6)
    })

    test('setViews multiple times', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: '',
                subtitle: '',
                img: '',
                views: 0,
                createdAt: '',
                type: [],
                blocks: []
            },
            error: undefined
        }

        let newState = state
        newState = createArticleFormReducer(newState, createArticleFormActions.setViews())
        newState = createArticleFormReducer(newState, createArticleFormActions.setViews())
        newState = createArticleFormReducer(newState, createArticleFormActions.setViews())

        expect(newState.article?.views).toBe(3)
    })

    test('setType', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: '',
                subtitle: '',
                img: '',
                views: 0,
                createdAt: '',
                type: [ArticleType.SCIENCE],
                blocks: []
            },
            error: undefined
        }

        const newState = createArticleFormReducer(state, createArticleFormActions.setType(ArticleType.IT))

        expect(newState.article?.type).toEqual([ArticleType.SCIENCE, ArticleType.IT])
        expect(newState.article?.type.length).toBe(2)
    })

    test('setType multiple types', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: '',
                subtitle: '',
                img: '',
                views: 0,
                createdAt: '',
                type: [],
                blocks: []
            },
            error: undefined
        }

        let newState = state
        newState = createArticleFormReducer(newState, createArticleFormActions.setType(ArticleType.SCIENCE))
        newState = createArticleFormReducer(newState, createArticleFormActions.setType(ArticleType.IT))
        newState = createArticleFormReducer(newState, createArticleFormActions.setType(ArticleType.ECONOMICS))

        expect(newState.article?.type).toEqual([ArticleType.SCIENCE, ArticleType.IT, ArticleType.ECONOMICS])
    })

    test('setContent', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: '',
                subtitle: '',
                img: '',
                views: 0,
                createdAt: '',
                type: [],
                blocks: []
            },
            error: undefined
        }

        const block: ArticleBlock = {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Block Title',
            paragraphs: ['Para 1', 'Para 2']
        }

        const newState = createArticleFormReducer(state, createArticleFormActions.setContent(block))

        expect(newState.article?.blocks).toEqual([block])
        expect(newState.article?.blocks.length).toBe(1)
    })

    test('setContent multiple blocks', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '',
                title: '',
                subtitle: '',
                img: '',
                views: 0,
                createdAt: '',
                type: [],
                blocks: []
            },
            error: undefined
        }

        const block1: ArticleBlock = {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Block 1',
            paragraphs: ['Para 1']
        }

        const block2: ArticleBlock = {
            id: '2',
            type: ArticleBlockType.CODE,
            code: 'console.log("Hi")'
        }

        let newState = state
        newState = createArticleFormReducer(newState, createArticleFormActions.setContent(block1))
        newState = createArticleFormReducer(newState, createArticleFormActions.setContent(block2))

        expect(newState.article?.blocks).toEqual([block1, block2])
        expect(newState.article?.blocks.length).toBe(2)
    })

    test('resetForm', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '123',
                title: 'Changed Title',
                subtitle: 'Changed Subtitle',
                img: 'https://example.com/image.jpg',
                views: 10,
                createdAt: '2/6/2026',
                type: [ArticleType.SCIENCE, ArticleType.IT],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'Block',
                        paragraphs: ['Para']
                    }
                ]
            },
            error: 'Some error'
        }

        const newState = createArticleFormReducer(state, createArticleFormActions.resetForm())

        expect(newState.article?.title).toBe('')
        expect(newState.article?.subtitle).toBe('')
        expect(newState.article?.img).toBe('')
        expect(newState.article?.type).toEqual([])
        expect(newState.article?.blocks).toEqual([])
        expect(newState.error).toBeUndefined()
    })

    test('resetForm keeps id and views', () => {
        const state: CreateArticleFormSchema = {
            article: {
                id: '123',
                title: 'Changed Title',
                subtitle: 'Changed Subtitle',
                img: 'https://example.com/image.jpg',
                views: 10,
                createdAt: '2/6/2026',
                type: [ArticleType.SCIENCE],
                blocks: []
            },
            error: undefined
        }

        const newState = createArticleFormReducer(state, createArticleFormActions.resetForm())

        expect(newState.article?.id).toBe('123')
        expect(newState.article?.views).toBe(10)
        expect(newState.article?.createdAt).toBe('2/6/2026')
    })

    test('should work with undefined state', () => {
        const newState = createArticleFormReducer(undefined, createArticleFormActions.setTitle('New Title'))

        expect(newState.article?.title).toBe('New Title')
    })
})
