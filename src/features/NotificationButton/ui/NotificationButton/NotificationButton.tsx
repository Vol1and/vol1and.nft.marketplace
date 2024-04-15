import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg?react';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.NotificationButton, {}, [className])}>
            <Popover trigger={(
                <Button theme={ButtonTheme.CLEAR} className={cls.notificationBtn}>
                    <NotificationIcon />
                </Button>
            )}
            >
                <NotificationList />
            </Popover>
        </div>
    );
});
