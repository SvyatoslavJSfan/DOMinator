/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleBlockType, ArticleTextBlock } from '@/entities/Article';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UpdateArticleTextBlock } from './UpdateArticleTextBlock';

const textBlock:  ArticleTextBlock = {
    id: '1',
    type: ArticleBlockType.TEXT,
    title: 'Заголовок текстового блока',
    paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
    ]
} 

const meta: Meta<typeof UpdateArticleTextBlock> = {
    title: 'features/UpdateArticleForm/UpdateArticleTextBlock',
    component: UpdateArticleTextBlock,
    parameters: {},
 
    tags: ['autodocs'],
 
    args: {
        onChangeTextBlockContent: fn(),
        onChangeTextBlockTitle: fn(),
        block: textBlock
    },
};

export default meta;
type Story = StoryObj<typeof UpdateArticleTextBlock>;




export const NormalDeprecated: Story = {
    args: {
       
    },
};

NormalDeprecated.decorators = [StoreDecorator({})]

export const DarkDeprecated: Story = {
    args: {
       
    },
};

DarkDeprecated.decorators = [ThemeDecorator(Theme.DARK)]

export const NormalRedesigned: Story = {
    args: {
        
    },
};

NormalRedesigned.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })]


export const DarkRedesigned: Story = {
    args: {
        
    },
};

DarkRedesigned.decorators = [ThemeDecorator(Theme.DARK), FeaturesFlagsDecorator({ isAppRedesigned: true })]
