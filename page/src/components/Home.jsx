import React, { Component } from 'react'
import Main from './Main'
import './Home.css'   
import $ from 'jquery/dist/jquery.min.js'
var n = 0;

export default class Home extends Component {
  componentDidMount () {  
     
  }
 
     render() {
      return (
    <div className="home">
        <div className="logo">
          <h1>DEV <strong>WEB</strong> </h1>
          <p>Desenvolvimento web freelancer back-end e front-end</p>
        </div>

        <div class="wrap-buckets">
    <div class="bucket">
        <div class="wrap-icon">
            01
        </div>
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="bucket">
        <div class="wrap-icon">
            02
        </div>
        <h3>laboris nisi</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="bucket">
        <div class="wrap-icon">
            03
        </div>
        <h3>dolore eu fugiat nulla</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
</div>




         
    </div>
       );
      }

 
      
     }
