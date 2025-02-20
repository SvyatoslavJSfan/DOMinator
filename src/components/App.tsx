import Counter from "./Counter";
import '../styles/index.scss'
import { Route, Routes } from "react-router-dom";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import AboutPage from "../pages/AboutPage/AboutPage";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "../theme/ThemeContext";
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers/classNames/classNames";



const App = () => {

    const { theme, toggleTheme } = useTheme()

    return ( 
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About</Link>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                <Route path={'/'} element={<MainPageAsync/>}/>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
            </Routes>
            </Suspense>

        </div>
     );
}
 
export default App;