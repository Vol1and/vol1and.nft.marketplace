import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { CommentAddForm, CommentList } from '@/entities/Comment';
import cls from './ArticleCommentList.module.scss';
// eslint-disable-next-line vol1and-path-plugin/layer-imports
import {
    addCommentForArticle,
    fetchCommentsByArticleId,
    getArticleComments,
    getArticleCommentsIsLoading,
} from '@/pages/ArticleDetailPage';

interface ArticleCommentListProps {
    id: string
    className?: string;
}

export const ArticleCommentList = memo((props: ArticleCommentListProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    const commentSaveHandler = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticleCommentList, {}, [className])}>
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentAddForm onSendComment={commentSaveHandler} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
    );
});
