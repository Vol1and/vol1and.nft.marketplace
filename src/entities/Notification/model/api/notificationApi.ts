import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../types/notification';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: (limit) => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotifications = recommendationsApi.useGetNotificationsQuery;
