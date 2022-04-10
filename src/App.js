import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import './App.css'
import Shop from './components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Header></Header>
            <Toaster></Toaster>
            <Routes>
                <Route path='/' element={<Shop></Shop>}></Route>
                <Route path='/orders' element={<Orders></Orders>}></Route>
                <Route path='/inventory' element={<Inventory></Inventory>}></Route>
                <Route path='/reviews' element={<Review></Review>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
};

export default App;