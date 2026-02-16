import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCreateArticlePageBlocks, getCreateArticlePageImage, getCreateArticlePageSubtitle, getCreateArticlePageTitle, getCreateArticlePageType } from '../../../model/selectors/createArticlePageSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createArticleFormActions, createArticleFormReducer } from '../../../model/slices/createArticleFormSlice';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AddTextForm } from '../../AddTextForm/AddTextForm';
import { AddCodeForm } from '../../AddCodeForm/AddCodeForm';
import { ArticleBlock, ArticleType } from '@/entities/Article';
import { ArticleBlockType } from '@/entities/Article';
import { AddImageForm } from '../../AddImageForm/AddImageForm';
import { createArticle } from '../../../model/services/createArticle';
import cls from './CreateArticleFormDeprecated.module.scss';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'

const reducers: ReducersList = {
    newArticle: createArticleFormReducer
};

interface CreateArticleFormRedesignedProps {
    className?: string;
    onCreated?: (id: string) => void;
}

const CreateArticleFormRedesigned = memo((props: CreateArticleFormRedesignedProps) => {
    const { className, onCreated } = props;
    const { t } = useTranslation('articlecreate');
    const title = useSelector(getCreateArticlePageTitle)
    const subtitle = useSelector(getCreateArticlePageSubtitle)
    const image = useSelector(getCreateArticlePageImage)
    const types = useSelector(getCreateArticlePageType)
    const blocks = useSelector(getCreateArticlePageBlocks)
    const dispatch = useAppDispatch()
    const [noTitleError, setNoTitleError] = useState(false)
    const [noContentError, setNoContentError] = useState(false)
    const navigate = useNavigate()


    const [addTextFormIsAvailable, setAddTextFormIsAvailable] = useState(false)
    const [currentTextBlockContent, setCurrentTextBlockContent] = useState('')
    const [currentTextBlockTitle, setCurrentTextBlockTitle] = useState('')
    const [addCodeFormIsAvailable, setAddCodeFormIsAvailable] = useState(false)
    const [addImageFormIsAvailable, setAddImageFormIsAvailable] = useState(false)
    const [currentCodeBlockContent, setCurrentCodeBlockContent] = useState('')
    const [currentImageBlockContent, setCurrentImageBlockContent] = useState('')
    const [currentImageTitle, setCurrentImageTile] = useState('')
    const [contentBlockCount, setContentBlockCount] = useState(1)

    
    const onChangeTitle = useCallback((value: string) => {
        setNoTitleError(false)
        dispatch(createArticleFormActions.setTitle(value))
        
    }, [dispatch])

    const onChangeSubtitle = useCallback((value: string) => {
        dispatch(createArticleFormActions.setSubitle(value))
        
    }, [dispatch])

    const onChangeImage = useCallback((value: string) => {
        dispatch(createArticleFormActions.setImage(value))
        
    }, [dispatch])

    const provideAddTextForm = useCallback(() => {
        setAddTextFormIsAvailable(!addTextFormIsAvailable)
    }, [addTextFormIsAvailable])

    const provideAddCodeForm = useCallback(() => {
        setAddCodeFormIsAvailable(!addCodeFormIsAvailable)
    }, [addCodeFormIsAvailable])

    const provideAddImageForm = useCallback(() => {
        setAddImageFormIsAvailable(!addImageFormIsAvailable)
    }, [addImageFormIsAvailable])

    const onChangeTextBlock = useCallback((value: string) => {
        setCurrentTextBlockContent(value)
    }, [])

    const onChangeCodeBlock = useCallback((value: string) => {
        setCurrentCodeBlockContent(value)
    }, [])

    const onChangeImageBlock = useCallback((value: string) => {
        setCurrentImageBlockContent(value)
    }, [])

    const onAddTextBlock = useCallback(() => {
        
        const textBlock: ArticleBlock = {
            id: contentBlockCount.toString(),
            type: ArticleBlockType.TEXT,
            title: currentTextBlockTitle,
            paragraphs: [currentTextBlockContent],
        }
        setContentBlockCount(prev => prev + 1)
        dispatch(createArticleFormActions.setContent(textBlock))
        setAddTextFormIsAvailable(false)
        
        
    }, [contentBlockCount, currentTextBlockContent, currentTextBlockTitle, dispatch])

    const onAddCodeBlock = useCallback(() => {
        
        const codeBlock: ArticleBlock = {
            id: contentBlockCount.toString(),
            type: ArticleBlockType.CODE,
            code: currentCodeBlockContent,
        }
        setContentBlockCount(prev => prev + 1)
        dispatch(createArticleFormActions.setContent(codeBlock))
        setAddCodeFormIsAvailable(false)
        
        
    }, [contentBlockCount, currentCodeBlockContent, dispatch])

    const onAddImageBlock = useCallback(() => {
        
        const imageBlock: ArticleBlock = {
            id: contentBlockCount.toString(),
            type: ArticleBlockType.IMAGE,
            title: currentImageTitle,
            src: currentImageBlockContent,
        }
        setContentBlockCount(prev => prev + 1)
        dispatch(createArticleFormActions.setContent(imageBlock))
        setAddImageFormIsAvailable(false)
        
        
    }, [contentBlockCount, currentImageBlockContent, currentImageTitle, dispatch])

    const onCreateArticle = useCallback(async () => {
        try {
            const isTitleNotEmpty = title?.trim()
            if(!isTitleNotEmpty) {
                setNoTitleError(true)
                return
            }
            if(blocks?.length === 0) {
                setNoContentError(true)
                return
            }
            const article = await dispatch(createArticle()).unwrap()
            dispatch(createArticleFormActions.resetForm())
            onCreated?.(article.id);
        } catch (error) {
            console.log(error);
            
        }
        
    }, [blocks?.length, dispatch, onCreated, title])

    const onSelectAllTopic = useCallback(() => {
        dispatch(createArticleFormActions.setType(ArticleType.ALL))
    }, [dispatch])

    const onSelectITTopic = useCallback(() => {
        dispatch(createArticleFormActions.setType(ArticleType.IT))
    }, [dispatch])

    const onSelectEconomicsTopic = useCallback(() => {
        dispatch(createArticleFormActions.setType(ArticleType.ECONOMICS))
    }, [dispatch])

    const onSelectScienceTopic = useCallback(() => {
        dispatch(createArticleFormActions.setType(ArticleType.SCIENCE))
    }, [dispatch])

    const onChangeTextBlockTitle = useCallback((value: string) => {
        setCurrentTextBlockTitle(value)
    }, [])

    const onChangeImageCaption = useCallback((value: string) => {
        setCurrentImageTile(value)
    }, [])

    const onCancelCreateArticle = useCallback(() => {
        navigate(-1)
    }, [navigate])

    return(
        
        <DynamicModuleLoader reducers={reducers}>
            <Card className={cls.CreateArticleFormRedesigned}>
                <Text title={t('Форма создания статьи')} className={cls.title}/>
                {noTitleError ? <Text theme={TextTheme.ERROR} text={t('Обязательное поле')}/> : null}
                <Input 
                    onChange={onChangeTitle}
                    placeholder={t('Введите название статьи')} 
                    value={title}
                    className={cls.input}
                />
  
                <Input 
                    onChange={onChangeSubtitle}
                    placeholder={t('Введите подзаголовок статьи')} 
                    value={subtitle}
                    className={cls.input}
                />

                <Input 
                    onChange={onChangeImage}
                    placeholder={t('Изображение (укажите URL)')} 
                    value={image}
                    className={cls.input}
                />

                <Text title={t('Выберите тематику')}
                    className={cls.selectTopic}
                />
                
                <HStack gap='32' justify='center' className={cls.topicsContainer}>
                    <HStack gap='8'>
                        <label htmlFor="ALL">{t('ALL')}</label>
                        <input id='ALL' type='checkbox'onChange={onSelectAllTopic}/> 
                    </HStack>
                    <HStack gap='8'>
                        <label htmlFor="IT">{t('IT')}</label>
                        <input id='IT' type='checkbox' onChange={onSelectITTopic}/>
                    </HStack>
                    <HStack gap='8'>
                        <label htmlFor="ECONOMICS">{t('ECONOMICS')}</label>
                        <input id='ECONOMICS' type='checkbox' onChange={onSelectEconomicsTopic}/> 
                    </HStack>
                    <HStack gap='8'>
                        <label htmlFor="SCIENCE">{t('SCIENCE')}</label>
                        <input id='SCIENCE' type='checkbox' onChange={onSelectScienceTopic}/>
                    </HStack>

                </HStack>
                <HStack gap='8' justify='center' className={cls.buttonsContainer}>
                    <Button onClick={provideAddTextForm}>
                        {t('Добавить текст')}
                    </Button>
                    <Button onClick={provideAddCodeForm}>
                        {t('Добавить фрагмент кода')}
                    </Button>
                    <Button onClick={provideAddImageForm}>
                        {t('Добавить изображение')}
                    </Button>
                </HStack>

                { addTextFormIsAvailable ? 
                    <AddTextForm 
                        onAdd={onAddTextBlock}
                        onChange={onChangeTextBlock}
                        onChangeTextBlockTitle={onChangeTextBlockTitle}
                    /> 
                    : null}
                { addCodeFormIsAvailable ? 
                    <AddCodeForm 
                        onAdd={onAddCodeBlock}
                        onChange={onChangeCodeBlock}/> 
                    : null}

                { addImageFormIsAvailable ? 
                    <AddImageForm 
                        onAdd={onAddImageBlock}
                        onChange={onChangeImageBlock}
                        value={currentImageBlockContent}
                        imageTitle={currentImageTitle}
                        onChangeImageCaption={onChangeImageCaption}
                    /> 
                    : null}
                {noContentError ? <Text theme={TextTheme.ERROR} text={t('У статьи должно быть содержимое')}/> : null}
                <HStack gap='8' justify='end' className={cls.saveButtonContainer}>
                    <Button onClick={onCreateArticle}>
                        {t('Сохранить')}
                    </Button> 
                    <Button onClick={onCancelCreateArticle}>
                        {t('Отмена')}
                    </Button> 
                </HStack>

            </Card>


        </DynamicModuleLoader>

        
        

    )
})

export default CreateArticleFormRedesigned