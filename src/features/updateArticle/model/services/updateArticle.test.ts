
import { Article } from '@/entities/Article'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { updateArticle } from './updateArticle'



describe('updateArticle.test', () => {

    test('update article success', async () => {

        const user = { id: '1', username: 'test' }
        
        const updatedArticle: Article = {
            id: '1',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: '',
            user,
            views: 0,
            createdAt: '',
            type: [],
            blocks: []
        }
        
        const responseArticle: Article = {
            ...updatedArticle,
            title: 'Updated title'
        }
        
        const thunk = new TestAsyncThunk(updateArticle, {
            user: {
                authData: user
            },
            updatedArticle: {
                updatedArticle
            }
        })
        
        thunk.api.put.mockReturnValue(Promise.resolve({ data: responseArticle }))
        const result = await thunk.callThunk()

        
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(responseArticle)
    })

})
