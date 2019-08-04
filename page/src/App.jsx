import React from 'react';
import './App.css'; 
import 'materialize-css/dist/css/materialize.min.css'; 
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'; 
import Routes from './components/Routes';
import Main from './components/Main' 
import { BrowserRouter } from 'react-router-dom'

export default props => 
<BrowserRouter>
        <div className="app">
            <Routes /> 
        </div> 
</BrowserRouter>
 