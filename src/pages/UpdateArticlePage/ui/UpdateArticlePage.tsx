import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { UpdateArticleForm } from '@/features/updateArticle';


const UpdateArticlePage = () => {
    
    const { id } = useParams<{ id: string }>();

    return (
        <Page data-testid='UpdateArticlePage'>
            <UpdateArticleForm id={id}/>
        </Page>

    );
};

export default UpdateArticlePage;
