import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { CommentList } from '../../../../entities/Comment';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { ArticleDetails } from '../../../../entities/Article';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from '../../../../shared/ui/Text/Text'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {

    const { t } = useTranslation('article-details')
    const { id } = useParams<{id: string}>()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if(!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарии')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList 
                    isLoading={commentsIsLoading} 
                    comments={comments}/>
            </div>
        </DynamicModuleLoader>

    );
}

export default memo(ArticleDetailsPage)