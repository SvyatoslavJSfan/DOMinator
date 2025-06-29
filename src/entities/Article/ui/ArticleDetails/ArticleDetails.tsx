import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { getArticleDetailsData, 
    getArticleDetailsError, 
    getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id?: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {

    const { t } = useTranslation('article-details')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block}/>
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block}/>
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block}/>
        default:
            return null;
        }
    }, [])
    

    useEffect(() => {
        if(__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
        
    }, [dispatch, id])

    let content

    if(isLoading) {
        content = (
            <VStack gap='8' max>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%"/>
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </VStack>
        )
    } else if(error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        )
    } else {
        content = (
            <>
                <HStack justify='center' max>
                    <Avatar 
                        size={200} 
                        src={article?.img} 
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap='4' max>
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap='8' className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={EyeIcon}/>
                        <Text text={String(article?.views)}/>
                    </HStack>
                    <HStack gap='8' className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={CalendarIcon}/>
                        <Text text={article?.createdAt}/>
                    </HStack>
                </VStack>

                { article?.blocks.map(renderBlock)}
            </>

        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap='16'max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>

    );
})