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

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Shop></Shop>}></Route>
                <Route path='/orders' element={<Orders></Orders>}></Route>
                <Route path='/inventory' element={<Inventory></Inventory>}></Route>
                <Route path='/reviews' element={<Review></Review>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
};

export default App;