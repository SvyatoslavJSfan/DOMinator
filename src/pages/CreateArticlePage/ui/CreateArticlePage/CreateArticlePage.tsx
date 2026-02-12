import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCreateArticlePageBlocks } from '../../model/selectors/createArticlePageSelectors';
import { Page } from '@/widgets/Page';
import { renderArticleBlock } from '@/entities/Article';
import CreateArticleFormRedesigned from '../CreateArticleForm/CreateArticleFormRedesigned/CreateArticleFormRedesigned';
import { ToggleFeatures } from '@/shared/lib/features';
import CreateArticleFormDeprecated from '../CreateArticleForm/CreateArticleFormDeprecated/CreateArticleFormDeprecated';

const CreateArticlePage = () => {
   
    const blocks = useSelector(getCreateArticlePageBlocks)
    const navigate = useNavigate();
    
    const onCreated = useCallback((id: string) => {
        navigate(`/articles/${id}`);
    }, [navigate]);
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Page>
                    <div>
                        <CreateArticleFormRedesigned onCreated={onCreated}/>
                        {
                            blocks?.length ? blocks.map(renderArticleBlock) : null
                        }
                    </div> 
                </Page>
            }

            off={
                <Page>
                    <div>
                        <CreateArticleFormDeprecated onCreated={onCreated}/>
                        {
                            blocks?.length ? blocks.map(renderArticleBlock) : null
                        }
                    </div> 
                </Page>
            }
        />



    );
};

export default CreateArticlePage;
