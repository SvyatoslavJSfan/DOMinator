import { StateSchema } from '@/app/providers/StoreProvider';

export const getInitialArticle = (state: StateSchema) => state.updatedArticle?.initialArticle;
export const getUpdatedArticle = (state: StateSchema) => state.updatedArticle?.updatedArticle;
export const getUpdateArticleIsLoading = (state: StateSchema) => state.updatedArticle?.isLoading;
export const getUpdateArticleError = (state: StateSchema) => state.updatedArticle?.error;