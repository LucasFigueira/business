 
import './App.css'; 
import 'materialize-css/dist/css/materialize.min.css';  
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'; 
import Routes from './components/Routes';
import Main from './components/Main' 
import { BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react'
 
export default class App extends Component{
    render() {
        return ( 
            <BrowserRouter>
            <div >
                    <div className="app">
                        <Routes /> 
                    </div> 
                    </div>
            </BrowserRouter>
        )
      }

  
} 



 