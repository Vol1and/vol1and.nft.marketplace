import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetail, ArticleView } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from 'pages/ArticleDetailPage/model/slices/articleDetailsCommentsSlice';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/ui/Page';
import {
    articleDetailsPageRecommendationsReducer, getArticleRecommendations,
} from 'pages/ArticleDetailPage/model/slices/articleDetailsPageRecommendationsSlice';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    fetchArticleRecommendations,
} from 'pages/ArticleDetailPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
};

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('article');
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const navigate = useNavigate();
    const { id } = useParams<{id: string}>();

    const backToList = () => {
        navigate(RoutePath.ARTICLES);
    };

    const commentSaveHandler = useCallback((text) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    }, [dispatch, id]);

    if (!id) {
        return (
            <div className={classNames(className, {}, [cls.ArticleDetailPage])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(className, {}, [cls.ArticleDetailPage])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={backToList}>{t('Назад к списку')}</Button>
                <ArticleDetail id={id} />
                <Text className={cls.commentTitle} title={t('Рекомендуем')} />
                <ArticleList articles={recommendations} view={ArticleView.PLATE} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={commentSaveHandler} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
