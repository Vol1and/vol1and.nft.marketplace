import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useNotifications } from '../../model/api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <div className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </div>
    );
});
