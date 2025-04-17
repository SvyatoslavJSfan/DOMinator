import React from 'react';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { Suspense } from 'react';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { articleDetailsReducer } from '../../../../entities/Article/model/slice/ArticleDetailsSlice';
import { profileReducer } from '../../../../entities/Profile';



const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer
}


export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: StoryFn ) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Suspense fallback=''>
            <StoryComponent/>
        </Suspense>
        
    </StoreProvider>

)

