import 'app/styles/index.scss';

import { Suspense, useEffect, useState } from 'react';
import { useTheme } from 'app/providers/themeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { Modal } from 'shared/ui/Modal/Modal';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
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
