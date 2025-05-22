import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo(({ className, isLoading, comments }: CommentListProps) => {

    const { t } = useTranslation()

    if(isLoading) {
        return (
            <VStack gap='16' className={classNames('', {}, [className])}>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </VStack>
        )
    }

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            {comments?.length ? 
                comments.map(comm => <CommentCard 
                    isLoading={isLoading} 
                    comment={comm}
                    key={comm.id}
                />)
                : <Text text={t('Комментарии отсутствуют')}/>
            }
        </VStack>
    );
})