import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getUserAuthData } from '@/entities/User'
import { Article, ArticleBlock, ArticleType } from '@/entities/Article'
import { getCreateArticlePageBlocks, getCreateArticlePageImage, getCreateArticlePageSubtitle, getCreateArticlePageTitle, getCreateArticlePageType } from '../selectors/createArticlePageSelectors'


export const createArticle = createAsyncThunk<Article, void,ThunkConfig<string>>(
    'createArticle/createArticle',
    async (_, thunkApi) => {

        const { extra, dispatch, rejectWithValue, getState } = thunkApi

        const userData = getUserAuthData(getState())

        
        if(!userData) {
            rejectWithValue('no data')
        }
        
        try {
            
            const payload: Omit<Article, 'user' | 'id'> & { userId: string } = {
                title: getCreateArticlePageTitle(getState()) as string,
                subtitle: getCreateArticlePageSubtitle(getState()) as string,
                img: getCreateArticlePageImage(getState()) as string,
                views: 0,
                createdAt: new Date().toLocaleDateString(),
                userId: userData?.id as string,
                type: getCreateArticlePageType(getState()) as ArticleType[],
                blocks: getCreateArticlePageBlocks(getState()) as ArticleBlock[]
            }

            const response = await extra.api.post<Article>('/articles', payload)

            if(!response.data) {
                throw new Error()
            }
            
            
            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }

    },
)