import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg?react';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg?react';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { articleDetailReducer } from '../../model/slices/articleDetailSlice';
import {
    getArticleDetailData,
    getArticleDetailIsLoading,
    getArticleDetailError,
} from '../../model/selectors/articleDetailSelectors';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetail.module.scss';
import { ArticleBlockType } from '../../model/consts/article';

interface ArticleDetailProps {
    className?: string
    id: string
}

const reducers: ReducerList = {
    articleDetail: articleDetailReducer,
};

const ArticleDetail = memo(({ className, id }: ArticleDetailProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailData);
    const isLoading = useSelector(getArticleDetailIsLoading);
    const error = useSelector(getArticleDetailError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent block={block} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <div>{error}</div>;
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text title={article?.title} text={article?.subtitle} />
                <div className={cls.articleInfo}>
                    <EyeIcon />
                    <Text text={`${article?.views}`} />
                </div>
                <div className={cls.articleInfo}>
                    <CalendarIcon />
                    <Text text={`${article?.createdAt}`} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(className, {}, [cls.ArticleDetail])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
export { ArticleDetail };
