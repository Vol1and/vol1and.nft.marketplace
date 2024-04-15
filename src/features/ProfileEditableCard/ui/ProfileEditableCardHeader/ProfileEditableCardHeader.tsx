import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getProfileCanEdit, getProfileReadonly,
} from '../../model/selectors/getEditableProfileSelectors';
import cls from './ProfileEditableCardHeader.module.scss';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface ProfileEditableCardHeaderProps {
    className?: string
    id: string
}

export const ProfileEditableCardHeader = (props: ProfileEditableCardHeaderProps) => {
    const {
        className, id,
    } = props;

    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const canEdit = useSelector(getProfileCanEdit);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        if (id) {
            dispatch(updateProfileData(id));
        }
    }, [dispatch, id]);

    return (
        <div className={classNames(cls.ProfileEditableCardHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (readonly
                ? (
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                        data-testid="ProfileEditableCardHeader.EditButton"
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                            data-testid="ProfileEditableCardHeader.CancelButton"
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                            data-testid="ProfileEditableCardHeader.SaveButton"
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                ))}
        </div>
    );
};
