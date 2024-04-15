import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const reducers = { login: loginReducer };

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ password, username }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={reducers}
        >
            <div className={classNames(className, {})}>
                <Text title={t('LoginForm')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    value={username}
                    onChange={onChangeUsername}
                    autofocus
                    placeholder={t('login')}
                    type="text"
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    placeholder={t('password')}
                    type="text"
                />
                <Button onClick={onLoginClick} theme={ButtonTheme.CLEAR} disabled={isLoading}>
                    {t('logIn')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default LoginForm;
