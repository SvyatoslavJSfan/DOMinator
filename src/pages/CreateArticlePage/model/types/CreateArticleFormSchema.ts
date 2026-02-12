import { Article } from '@/entities/Article';

export interface CreateArticleFormSchema {
    article?: Omit<Article, 'user'>;
    error?: string;
}
