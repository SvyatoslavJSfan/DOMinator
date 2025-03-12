import 'app/styles/index.scss';

import { Suspense, useState } from 'react';
import { useTheme } from 'app/providers/themeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();

   

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
