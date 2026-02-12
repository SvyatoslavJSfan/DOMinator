import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextAlign, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articleDetailsReducer, 
    fetchArticleById, 
    getArticleDetailsError, 
    getArticleDetailsIsLoading } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { renderArticleBlockForUpdate } from '../../model/lib/renderArticleBlockForUpdate';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import cls from './UpdateArticleForm.module.scss'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { updateArticleActions, updateArticleReducer } from '../../model/slice/updateArticleSlice';
import { getUpdatedArticle } from '../../model/selectors/updateArticleSelectors';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { updateArticle } from '../../model/services/updateArticle';

interface UpdateArticleFormProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
    updatedArticle: updateArticleReducer
}

export const ArticleDetailsSkeleton = () => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });
    return (
        <VStack gap="16" max>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                border="50%"
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
        </VStack>
    );
};

export const UpdateArticleForm = memo((props: UpdateArticleFormProps) => {
    const { className, id } = props;
    const { t } = useTranslation('update-article');
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getUpdatedArticle)
    const navigate = useNavigate()

    useEffect(() => {
        if(__PROJECT__ !== 'storybook' && id) {
            dispatch(fetchArticleById(id))
        }
        
    }, [dispatch, id])

    const onChangeArticleTitle = useCallback((value: string) => {
        dispatch(updateArticleActions.updateArticlesTitle(value))
    }, [dispatch])

    const onChangeArticleSubtitle = useCallback((value: string) => {
        dispatch(updateArticleActions.updateArticlesSubtitle(value))
    }, [dispatch])

    const onChangeArticleImage = useCallback((value: string) => {
        dispatch(updateArticleActions.updateArticlesImage(value))
    }, [dispatch])

    const onSaveArticle = useCallback(async () => {
        const result = await dispatch(updateArticle());
        if (updateArticle.fulfilled.match(result)) {
            navigate(`/articles/${id}`);
        }
    }, [dispatch, id, navigate])

    const onCancelUpdate = useCallback(() => {
        navigate(`/articles/${id}`)
    }, [id, navigate])

    const onChangeTextBlockTitle = useCallback((id: string) => (value: string) => {
        dispatch(updateArticleActions.updateTextBlockTitle({ id, title: value }));
    }, [dispatch])

    const onChangeTextBlockContent = useCallback((id: string) => (value: string) => {
        dispatch(updateArticleActions.updateTextBlockContent({ id, content: value }));
    }, [dispatch])

    const onChangeCodeBlockContent = useCallback((id: string) => (value: string) => {
        dispatch(updateArticleActions.updateCodeBlockContent({ id, content: value }));
    }, [dispatch])

    const onChangeImageBlockSource = useCallback((id: string) => (value: string) => {
        dispatch(updateArticleActions.updateImageBlockSource({ id, content: value }));
    }, [dispatch])

    const onChangeImageBlockTitle = useCallback((id: string) => (value: string) => {
        dispatch(updateArticleActions.updateImageBlockTitle({ id, content: value }));
    }, [dispatch])

    let content

    if(isLoading) {
        content = <ArticleDetailsSkeleton />
    } else if(error) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <TextRedesigned
                        align={TextAlign.CENTER}
                        title={t('Произошла ошибка при загрузке статьи')}
                    />
                }
                off={
                    <TextDeprecated
                        align={TextAlign.CENTER}
                        title={t('Произошла ошибка при загрузке статьи')}
                    />
                }
            />

        )
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <>
                        <InputRedesigned value={article?.title} onChange={onChangeArticleTitle}/>
                        <InputRedesigned value={article?.subtitle} onChange={onChangeArticleSubtitle}/>
                        <InputRedesigned value={article?.img} onChange={onChangeArticleImage}/>
                        { 
                            article?.blocks.map((block) => 
                                renderArticleBlockForUpdate({ 
                                    block, 
                                    onChangeTextBlockTitle,
                                    onChangeTextBlockContent,
                                    onChangeCodeBlockContent,
                                    onChangeImageBlockSource,
                                    onChangeImageBlockTitle
                                })) 
                        }
                        <ButtonRedesigned onClick={onSaveArticle}>
                            {t('Сохранить')}
                        </ButtonRedesigned>
                        <ButtonRedesigned onClick={onCancelUpdate}>
                            {t('Отмена')}
                        </ButtonRedesigned>
                    </>
                }
                off={
                    <>
                        <HStack justify="center" max >
                            <InputDeprecated value={article?.img} />
                        </HStack>
                        <VStack gap="4" max data-testid="ArticleDetails.Info">
                            <InputDeprecated
                                value={article?.title}
                                className={cls.articleTitle}
                            />
                            <InputDeprecated
                                value={article?.subtitle}
                                className={cls.articleSubtitle}
                            />
                        </VStack>
                        { 
                            article?.blocks.map((block) => 
                                renderArticleBlockForUpdate({ 
                                    block, 
                                    onChangeTextBlockTitle,
                                    onChangeTextBlockContent,
                                    onChangeCodeBlockContent,
                                    onChangeImageBlockSource,
                                    onChangeImageBlockTitle
                                })) 
                        }
                        <ButtonDeprecated onClick={onSaveArticle}>
                            {t('Сохранить')}
                        </ButtonDeprecated>
                        <ButtonDeprecated onClick={onCancelUpdate}>
                            {t('Отмена')}
                        </ButtonDeprecated>
                    </>
                }
            />

        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap='16'max className={classNames(cls.UpdateArticleForm, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
