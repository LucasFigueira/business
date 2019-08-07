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
          <h1>DEV WEB </h1>
          <p>Desenvolvimento web freelancer back-end e front-end</p>
        </div>
        <div className="container">
          <div className="row">
  

      <div className="col s12 m6 l4" data-aos="fade-right" data-aos-mirror="true"> 
      <div class="card"> 
        <div className="card-image">
          <img src="https://fernandofranzini.files.wordpress.com/2013/01/html5_logo_256.png?w=256&h=256&zoom=2"/>

         </div> 

         </div>
      </div>

      <div class="col s12 m6 l4" data-aos="fade-up" data-aos-mirror="true">
      <div className="card">
        <div class="card-image">
          <img src="https://www.lifewire.com/thmb/s9kfBeuaF14VAGgE-SjDB-L0ZDs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/css3-57b597e85f9b58b5c2b338de.png"/>
        </div>

       </div>
    </div>

    <div class="col s12 m6 l4" data-aos="fade-left" data-aos-mirror="true">
    <div className="card">
      <div class="card-image">
      <img src="http://luizricardo.org/wordpress/wp-content/upload-files/2014/11/js-logo-badge-512.png"/>
      </div>

   </div>
  </div>

          </div>
        </div>
    </div>
       );
      }

 
      
     }
