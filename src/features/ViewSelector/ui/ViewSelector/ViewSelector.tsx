import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { ViewSelectorElementType } from '../../model/types/viewSelector';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ViewSelector.module.scss';

interface ViewSelectorProps<T> {
    className?: string,
    viewTypes: ViewSelectorElementType<T>[]
    view: T
    onViewClick: (view: T) => void
}

const ViewSelector = <T, >(props: ViewSelectorProps<T>) => {
    const {
        className, viewTypes, onViewClick, view,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(className, {}, [cls.ViewSelector])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={`${viewType.view}`}
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', { [cls.selected]: viewType.view === view })}
                    onClick={() => onViewClick(viewType.view)}
                >
                    <viewType.icon />
                </Button>
            ))}
        </div>
    );
};
export { ViewSelector };
