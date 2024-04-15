import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(className, {}, [cls.PageError])}>
            <p>{t('unexpectedError')}</p>
            <Button onClick={reloadPage}>
                {t('reloadPage')}
            </Button>
        </div>
    );
};
export { PageError };
