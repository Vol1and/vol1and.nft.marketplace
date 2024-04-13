import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useEffect } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { CommentAddForm, CommentList } from 'entities/Comment';
import { addCommentForArticle } from 'pages/ArticleDetailPage/model/services/addCommentForArticle/addCommentForArticle';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailPage/model/selectors/comments';
import { getArticleComments } from 'pages/ArticleDetailPage/model/slices/articleDetailsCommentsSlice';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleCommentList.module.scss';

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
