import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharguePag from '../containers/CharguePag';
import IntroPag from '../containers/Intro/IntroPag';
import Login from '../containers/login/Login';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <CharguePag /> }/>
                <Route path='/intro' element={ <IntroPag /> }/>
                <Route path='/login' element={ <Login /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
