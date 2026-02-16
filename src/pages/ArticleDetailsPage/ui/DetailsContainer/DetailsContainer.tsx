import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainterProps {
    className?: string;
    id?: string;
}

export const DetailsContainer = memo((props: DetailsContainterProps) => {
    const { className, id: propId } = props;
    const { id: paramId } = useParams<{ id: string }>();
    const id = __PROJECT__ === 'storybook' ? propId || '1' : paramId;

    return (
        <Card max border="round" className={className} padding="24">
            <ArticleDetails id={id} />
        </Card>
    );
});
