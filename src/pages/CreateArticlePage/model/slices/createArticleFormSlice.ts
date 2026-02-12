/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateArticleFormSchema } from '../types/CreateArticleFormSchema';
import { ArticleBlock, ArticleType } from '@/entities/Article';

const initialState: CreateArticleFormSchema = {
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
};

export const createArticleFormSlice = createSlice({
    name: 'createArticleForm',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            
            if (state.article) {
                state.article.title = action.payload;
            }
        },
        setSubitle: (state, action: PayloadAction<string>) => {
            if (state.article) {
                state.article.subtitle = action.payload;
            }
        },
        setImage: (state, action: PayloadAction<string>) => {
            if (state.article) {
                state.article.img = action.payload;
            }
        },
        setViews: (state) => {
            if (state.article) {
                state.article.views +=1;
            }
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            if (state.article) {
                state.article.type = [...state.article.type, action.payload];
            }
        },
        setContent: (state, action: PayloadAction<ArticleBlock>) => {
            if (state.article) {
                state.article.blocks = [...state.article.blocks, action.payload]
            }
        },
        resetForm: (state) => {
            if (state.article && initialState.article) {
                state.article.title = initialState.article.title;
                state.article.subtitle = initialState.article.subtitle;
                state.article.img = initialState.article.img;
                state.article.type = initialState.article.type;
                state.article.blocks = initialState.article.blocks;
            }
            state.error = undefined;
        },
    },
    
});

// Action creators are generated for each case reducer function
export const { actions: createArticleFormActions } = createArticleFormSlice;
export const { reducer: createArticleFormReducer } = createArticleFormSlice;
