import React, {memo, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {classNames} from 'shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader';
import {getArticleDetailData, getArticleDetailIsLoading} from 'entities/Article';
import {getArticleDetailError} from 'entities/Article/model/selectors/articleDetailSelectors';
import {Loader} from 'shared/ui/Loader/Loader';
import {articleDetailReducer} from '../../model/slice/articleDetailSlice';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetail.module.scss';

interface ArticleDetailProps {
    className?: string
    id: string
}

const reducers: ReducerList = {
    articleDetail: articleDetailReducer,
};

const ArticleDetail = memo(({className, id}: ArticleDetailProps) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const article = useSelector(getArticleDetailData);
    const isLoading = useSelector(getArticleDetailIsLoading);
    const error = useSelector(getArticleDetailError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content

    if (isLoading) {
        content = <Loader/>
    }

    if (error) {
        content = <div>{error}</div>
    } else {
        content = (
            <div>Ебись ты</div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(className, {}, [cls.ArticleDetail])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
export {ArticleDetail};
