import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from 'entities/Article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text } from 'shared/ui/Text/Text';
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
