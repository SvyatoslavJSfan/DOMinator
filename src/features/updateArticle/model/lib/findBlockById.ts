import { ArticleBlock } from '@/entities/Article';
import { UpdateArticleSchema } from '../types/updateArticleSchema';


export const findBlockById = (state: UpdateArticleSchema, id: string): ArticleBlock | undefined => {
    const block = state.updatedArticle?.blocks.find(block => block.id === id)

    return block
}