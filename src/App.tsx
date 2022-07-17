import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {MainPage} from './pages/MainPage/MainPage';

export const App = () => (
    <Routes>
        <Route path="/" element={<MainPage/>}/>
    </Routes>
)
