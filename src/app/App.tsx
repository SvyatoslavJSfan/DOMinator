
import 'app/styles/index.scss'
import { Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./providers/themeProvider/lib/ThemeContext";
import { useTheme } from "app/providers/themeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';



const App = () => {

    const { theme } = useTheme()

    return ( 
        <div className={classNames('app', {}, [theme])}>

            <Suspense fallback={''}>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
            

          
        </div>
     );
}
 
export default App;