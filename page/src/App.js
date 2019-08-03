import React from 'react';
import './App.css'; 
import 'materialize-css/dist/css/materialize.min.css'; 

import 'aos/dist/aos.css'; 
import Routes from './components/Routes';
import Main from './components/Main'
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'

export default props => 
<BrowserRouter>
        <div className="app grey lighten-2">
            <Routes />
            <Footer />
        </div> 
</BrowserRouter>

function generateNoise(opacity) {
    if ( !!!document.createElement('canvas').getContext ) {
       return false;
    }
  
    var canvas = document.createElement("canvas"),
    ctx = canvas.getContext('2d'),
    x, y,
    number,
    opacity = opacity || .2;
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    for ( x = 0; x < canvas.width; x++ ) {
       for ( y = 0; y < canvas.height; y++ ) {
          number = Math.floor( Math.random() * 60 );
  
          ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
          ctx.fillRect(x, y, 1, 1);
       }
    }
  
    document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
 }
 generateNoise(.5);