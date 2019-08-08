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
            1
        </div>
        <h3>Conte-nos sua ideia</h3>
        <p>Através do campo "Contato", whatsapp ou skype nos informe sua ideia.
        </p>
    </div>
    <div class="bucket">
        <div class="wrap-icon">
            2
        </div>
        <h3>Planejamento</h3>
        <p>Iremos planejar a solução da sua ideia, bem como definir o orçamento.</p>
    </div>
    <div class="bucket">
        <div class="wrap-icon">
            3
        </div>
        <h3>Concepção</h3>
        <p>Aqui iremos te entregar o melhor produto possível, utilizando as melhores tecnologias e técnicas.</p>
    </div>
</div>




         
    </div>
       );
      }

 
      
     }
