import { memo, TextareaHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TextArea.module.scss';

type HTMLTextAreaProps = Omit<
TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange'
>;

interface TextAreaProps extends HTMLTextAreaProps {
    className?: string
    onChange?: (value: string) => void
}

export const TextArea = memo((props: TextAreaProps) => {
    const { className, 
        onChange,
        ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };


    return (
        <div className={classNames(cls.textAreaWrapper, {}, [className])}>
            <textarea
                className={classNames(cls.TextArea, {}, [className])}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>

    );
});
