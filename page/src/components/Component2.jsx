
import React, { Component } from 'react'
import Main from './Main'
import './Component2.css'

export default props =>
<React.Fragment>
<div className="servicos">
<h2 class="dark-text">Nossos Serviços</h2>
   <div className="container">
      <div className="row">
      <div className="col s12 m6 l3" >
            <div className="icon-service">
                  <i className="icon-monitor"></i>
            </div>
            <h5>Sistemas</h5>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
            </p>
      </div>

      <div className="col s12 m6 l3" >
            <div className="icon-service">
            <i className="icon-notes"></i>
            </div>
            <h5>Layouts</h5>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
            </p>
      </div>

      <div className="col s12 m6 l3" >
            <div className="icon-service">
                  <i className="icon-graph"></i>
            </div>
            <h5>Planejamento</h5>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
            </p>
      </div>

      <div className="col s12 m6 l3" >
            <div className="icon-service"> 
                      
                  <i className="icon-check"></i>
            </div>
            <h5>Manutenção</h5>  
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
            </p>
      </div>
      
      </div>

   </div>

</div>
<div className="separador2"> 
      </div>
</React.Fragment>

