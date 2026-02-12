import { StateSchema } from '@/app/providers/StoreProvider';

export const getCreateArticlePageTitle = (state: StateSchema) => state.newArticle?.article?.title
export const getCreateArticlePageSubtitle = (state: StateSchema) => state.newArticle?.article?.subtitle
export const getCreateArticlePageImage = (state: StateSchema) => state.newArticle?.article?.img
export const getCreateArticlePageType = (state: StateSchema) => state.newArticle?.article?.type
export const getCreateArticlePageBlocks = (state: StateSchema) => state.newArticle?.article?.blocks