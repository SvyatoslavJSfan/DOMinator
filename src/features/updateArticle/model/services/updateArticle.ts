
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getUserAuthData } from '@/entities/User'
import { Article } from '@/entities/Article'
import { getUpdatedArticle } from '../selectors/updateArticleSelectors'


export const updateArticle = createAsyncThunk<Article, void,ThunkConfig<string>>(
    'updateArticle',
    async (_, thunkApi) => {

        const { extra, rejectWithValue, getState } = thunkApi

        const userData = getUserAuthData(getState())
        const updatedArticle = getUpdatedArticle(getState())
        const articleId = updatedArticle?.id
        
        if(!userData) {
            return rejectWithValue('no data')
        }

        if(!updatedArticle?.id) {
            return rejectWithValue('no article id')
        }
        
        try {

            const response = await extra.api.put<Article>(`/articles/${articleId}`, updatedArticle)

            if(!response.data) {
                throw new Error()
            }
            
            
            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }

    },
)
