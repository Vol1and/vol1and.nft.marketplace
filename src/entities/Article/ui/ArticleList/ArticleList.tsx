import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/article';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
    .fill(0).map((el, idx) => <ArticleListItemSkeleton key={idx} view={view} />);

const ArticleList = (props: ArticleListProps) => {
    const {
        articles, className, isLoading, view = ArticleView.PLATE,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} />;

    if (!isLoading && !articles.length) {
        return <Text text="Статьи не найдены" />;
    }

    return (
        <div className={classNames(className, {}, [cls[view]])}>
            {articles.map(renderArticle)}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
export { ArticleList };
