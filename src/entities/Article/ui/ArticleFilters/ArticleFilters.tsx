import React, { useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ViewSelector, ViewSelectorElementType } from 'features/ViewSelector';
import { articleFilterActions, ArticleView, getArticleFilterType } from 'entities/Article';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { OrderSelector } from 'features/OrderSelector';
import {
    getArticleFilterOrder,
    getArticleFilterSearch,
    getArticleFilterSortField,
} from 'entities/Article/model/selectors/articleFilterSelectors';
import { SortOrder } from 'shared/types';
import { articleListPageActions, getArticleListPageView } from 'pages/ArticleListPage';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { fetchArticleList } from 'pages/ArticleListPage/model/services/fetchArticleList/fetchArticleList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import cls from './ArticleFilters.module.scss';
import {ArticleSortField, ArticleType} from "entities/Article/model/consts/article";

interface ArticleFiltersProps {
    className?: string
}
const viewTypes: ViewSelectorElementType<ArticleView>[] = [
    { view: ArticleView.PLATE, icon: TiledIcon },
    { view: ArticleView.LIST, icon: ListIcon },
];

const ArticleFilters = ({ className }: ArticleFiltersProps) => {
    const { t } = useTranslation();
    const view = useSelector(getArticleListPageView);
    const dispatch = useDispatch();
    const search = useSelector(getArticleFilterSearch);
    const order = useSelector(getArticleFilterOrder);
    const type = useSelector(getArticleFilterType);
    const sortField = useSelector(getArticleFilterSortField);

    const sortFieldsOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        { value: ArticleSortField.CREATED, content: t('дате создания') },
        { value: ArticleSortField.TITLE, content: t('названию') },
        { value: ArticleSortField.VIEWS, content: t('просмотрам') },
    ], [t]);

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        { value: ArticleType.ALL, content: t(ArticleType.ALL) },
        { value: ArticleType.ECONOMICS, content: t(ArticleType.ECONOMICS) },
        { value: ArticleType.IT, content: t(ArticleType.IT) },
        { value: ArticleType.SCIENCE, content: t(ArticleType.SCIENCE) },
    ], [t]);

    const onViewClick = (view: ArticleView) => {
        dispatch(articleListPageActions.setView(view));
    };

    const fetchData = useDebounce(() => {
        dispatch(articleListPageActions.setPage(1));
        dispatch(fetchArticleList({ replace: true }));
    }, 500);

    const onChangeSortField = useCallback((el: ArticleSortField) => {
        dispatch(articleFilterActions.setSort(el));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((el: SortOrder) => {
        dispatch(articleFilterActions.setOrder(el));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeType = useCallback((el: TabItem<ArticleType>) => {
        dispatch(articleFilterActions.setType(el.value));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((el: string) => {
        dispatch(articleFilterActions.setSearch(el));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(className, {}, [cls.ArticleFilters])}>
            <div className={cls.wrapper}>
                <div className={cls.wrapper}>
                    <Select
                        onChange={onChangeSortField}
                        options={sortFieldsOptions}
                        label={t('Сортировать по')}
                        value={sortField}
                    />
                    <OrderSelector onChange={onChangeOrder} value={order} />
                </div>
                <ViewSelector viewTypes={viewTypes} view={view} onViewClick={onViewClick} />
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск')} />
            </Card>
            <Tabs className={cls.tabs} tabs={typeTabs} value={type} onTabClick={onChangeType} />
        </div>
    );
};
export { ArticleFilters };
