
import React, { Component } from 'react'
import Main from './Main'
import './Exp.css'
import Comp2 from './Component2.jsx'
import Comp3 from './SobreNos.jsx'
import Contato2 from './Contato2.jsx'
import Contato from './Contato.jsx'
import { Parallax } from "react-parallax";
import { render } from "react-dom";
import Home from './Home.jsx'
const insideStyles = {
      background: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    };
export default props =>
<Main> 

    <Home>
        
    </Home>
      
      <Comp2>

      </Comp2>
      
      <Comp3>
        
      </Comp3>

      <Contato2>
            
      </Contato2>
      
      <Contato>
            
      </Contato>
</Main>
 