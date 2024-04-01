import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserMounted, userActions } from 'entities/User';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                {mounted && <AppRouter />}
            </div>
        </div>
    );
};

export default App;
