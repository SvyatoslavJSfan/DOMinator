import { Article } from '@/entities/Article';

export interface UpdateArticleSchema {
    initialArticle?: Article;
    updatedArticle?: Article;
    isLoading: boolean;
    error?: string;
}