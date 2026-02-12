import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UpdateArticleSchema } from '../types/updateArticleSchema';
import { Article, ArticleBlockType, fetchArticleById } from '@/entities/Article';
import { findBlockById } from '../lib/findBlockById';

const initialState: UpdateArticleSchema = {
    isLoading: false,
    error: undefined,
    initialArticle: undefined,
    updatedArticle: undefined
};

export const updateArticleSlice = createSlice({
    name: 'updateArticle',
    initialState,
    reducers: {
        updateArticlesTitle: (state, action: PayloadAction<string>) => {
            if (!state.updatedArticle) return;
            state.updatedArticle.title = action.payload;
        },
        updateArticlesSubtitle: (state, action: PayloadAction<string>) => {
            if (!state.updatedArticle) return;
            state.updatedArticle.subtitle = action.payload;
        },
        updateArticlesImage: (state, action: PayloadAction<string>) => {
            if (!state.updatedArticle) return;
            state.updatedArticle.img = action.payload;
        },
        updateTextBlockTitle: (state, action: PayloadAction<{ id: string; title: string; }>) => {
            if (!state.updatedArticle) return;
            const textBlockToUpdate = findBlockById(state, action.payload.id);
            if (textBlockToUpdate?.type === ArticleBlockType.TEXT) {
                textBlockToUpdate.title = action.payload.title;
            }
        },
        updateTextBlockContent: (state, action: PayloadAction<{ id: string; content: string; }>) => {
            if (!state.updatedArticle) return;
            const textBlockToUpdate = findBlockById(state, action.payload.id);
            if (textBlockToUpdate?.type === ArticleBlockType.TEXT) {
                const updatedParagraphs = action.payload.content.split('\n').filter(Boolean)
                textBlockToUpdate.paragraphs = updatedParagraphs;
            }
        },
        updateCodeBlockContent: (state, action: PayloadAction<{ id: string; content: string; }>) => {
            if (!state.updatedArticle) return;
            const codeBlockToUpdate = findBlockById(state, action.payload.id);
            if (codeBlockToUpdate?.type === ArticleBlockType.CODE) {
                codeBlockToUpdate.code = action.payload.content
            }
        },
        updateImageBlockSource: (state, action: PayloadAction<{ id: string; content: string; }>) => {
            if (!state.updatedArticle) return;
            const imageBlockToUpdate = findBlockById(state, action.payload.id);
            if (imageBlockToUpdate?.type === ArticleBlockType.IMAGE) {
                imageBlockToUpdate.src = action.payload.content
            }
        },
        updateImageBlockTitle: (state, action: PayloadAction<{ id: string; content: string; }>) => {
            if (!state.updatedArticle) return;
            const imageBlockToUpdate = findBlockById(state, action.payload.id);
            if (imageBlockToUpdate?.type === ArticleBlockType.IMAGE) {
                imageBlockToUpdate.title = action.payload.content
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                state.isLoading = false;
                state.initialArticle = action.payload;
                state.updatedArticle = action.payload;
                
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

// Action creators are generated for each case reducer function
export const { actions: updateArticleActions } = updateArticleSlice;
export const { reducer: updateArticleReducer } = updateArticleSlice;
