import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './CommentAddForm.module.scss';

export interface CommentAddFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const CommentAddForm = memo((props: CommentAddFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();

    const [text, setText] = useState('');

    const onCommentTextChange = useCallback((value: string) => {
        setText(value);
    }, []);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <div className={classNames(cls.CommentAddForm, {}, [className])}>
            <Input
                className={cls.input}
                placeholder={t('Введите текст комментария')}
                value={text}
                onChange={onCommentTextChange}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSendHandler}
            >
                {t('Отправить')}
            </Button>
        </div>
    );
});

export { CommentAddForm };
