import 'app/styles/index.scss';

import { useTheme } from 'app/providers/themeProvider/lib/useTheme';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';

import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])
   

    return (
        <div className={classNames('app', {}, [theme])}>

            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>

            </Suspense>

        </div>
    );
}

export default App;
