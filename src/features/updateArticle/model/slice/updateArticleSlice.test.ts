import { ArticleBlockType } from '@/entities/Article'
import { UpdateArticleSchema } from '../types/updateArticleSchema'
import { updateArticleActions, updateArticleReducer } from './updateArticleSlice'


describe('update article slice', () => {

    test('test update article title', () => {
        const state: DeepPartial<UpdateArticleSchema> = { updatedArticle: {
            title: 'JavaSpript news'
        }
        }

        expect(updateArticleReducer(state as UpdateArticleSchema, updateArticleActions.updateArticlesTitle('New title')))
            .toEqual({ updatedArticle: {
                title: 'New title'
            } })
    })

    test('test update article subtitle', () => {
        const state: DeepPartial<UpdateArticleSchema> = { updatedArticle: {
            subtitle: 'JavaSpript news'
        } }

        expect(updateArticleReducer(state as UpdateArticleSchema, updateArticleActions.updateArticlesSubtitle('New subtitle')))
            .toEqual({ updatedArticle: {
                subtitle: 'New subtitle'
            } })
    })

    test('test update article avatar', () => {
        const state: DeepPartial<UpdateArticleSchema> = { updatedArticle: {
            img: 'https://article-avatar'
        } }

        expect(updateArticleReducer(state as UpdateArticleSchema, updateArticleActions.updateArticlesImage('https://updated-article-avatar')))
            .toEqual({ updatedArticle: {
                img: 'https://updated-article-avatar'
            } })
    })

    test('test update article text block title', () => {
        const state: DeepPartial<UpdateArticleSchema> = { updatedArticle: {
            blocks: [{
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
                ]
            }]
        } }

        expect(updateArticleReducer(state as UpdateArticleSchema, updateArticleActions.updateTextBlockTitle({ id: '1', title: 'Обновленный заголовок этого блока' })))
            .toEqual({ updatedArticle: {
                blocks: [{
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'Обновленный заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
                    ]
                }]
            } })
    })

    test('test update article text block content', () => {
        const state: DeepPartial<UpdateArticleSchema> = { updatedArticle: {
            blocks: [{
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Hello world!'
                ]
            }]
        } }

        expect(updateArticleReducer(state as UpdateArticleSchema, updateArticleActions.updateTextBlockContent({ id: '1', content: 'Hello again, world!' })))
            .toEqual({ updatedArticle: {
                blocks: [{
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Hello again, world!'
                    ]
                }]
            } })
    })

    test('test update article code block content', () => {
        const state: DeepPartial<UpdateArticleSchema> = { updatedArticle: {
            blocks: [{
                id: '2',
                type: ArticleBlockType.CODE,
                code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);'
            }]
        } }

        expect(updateArticleReducer(state as UpdateArticleSchema, updateArticleActions.updateCodeBlockContent({ id: '2', content: 'console.log("Hello world!")' })))
            .toEqual({ updatedArticle: {
                blocks: [{
                    id: '2',
                    type: ArticleBlockType.CODE,
                    code: 'console.log("Hello world!")'
                }]
            } })
    })

    test('test update article image block source', () => {
        const state: DeepPartial<UpdateArticleSchema> = { updatedArticle: {
            blocks: [{
                id: '3',
                type: ArticleBlockType.IMAGE,
                src: 'https://image-source'
            }]
        } }

        expect(updateArticleReducer(state as UpdateArticleSchema, updateArticleActions.updateImageBlockSource({ id: '3', content: 'https://image-source-updated' })))
            .toEqual({ updatedArticle: {
                blocks: [{
                    id: '3',
                    type: ArticleBlockType.IMAGE,
                    src: 'https://image-source-updated'
                }]
            } })
    })

    test('test update article image block title', () => {
        const state: DeepPartial<UpdateArticleSchema> = { updatedArticle: {
            blocks: [{
                id: '4',
                type: ArticleBlockType.IMAGE,
                src: 'https://image-source',
                title: 'image caption'
            }]
        } }

        expect(updateArticleReducer(state as UpdateArticleSchema, updateArticleActions.updateImageBlockTitle({ id: '4', content: 'updated image caption' })))
            .toEqual({ updatedArticle: {
                blocks: [{
                    id: '4',
                    type: ArticleBlockType.IMAGE,
                    src: 'https://image-source',
                    title: 'updated image caption'
                }]
            } })
    })


})

