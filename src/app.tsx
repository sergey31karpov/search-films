import React from 'react';
import './app.css';
import {Routes, Route} from 'react-router-dom'
import {MainPage} from './pages/main-page/main-page';

export const App = () => (
    <Routes>
        <Route path="/" element={<MainPage/>}/>
    </Routes>
)
