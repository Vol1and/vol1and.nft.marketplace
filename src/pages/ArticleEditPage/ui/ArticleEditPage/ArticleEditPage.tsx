import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = !!id;

    return (
        <Page className={classNames(className, {}, [cls.ArticleEditPage])}>
            {t(isEdit ? 'Редактирование статьи' : 'Создание статьи')}
        </Page>
    );
};
export default ArticleEditPage;
