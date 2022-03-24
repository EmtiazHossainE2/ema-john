import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import './App.css'
import Shop from './components/Shop/Shop';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Shop></Shop>
        </div>
    );
};

export default App;