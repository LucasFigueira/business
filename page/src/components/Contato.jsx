import React, { Component } from 'react'
import Main from './Main'
import axios from 'axios'
import './Contato.css'


const initialState = {
  msg: { nome: '', email: '', mensagem: '' } 
} 
const image1 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const baseUrl = 'http://localhost:3001/mensagem'

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

export default class Contato extends Component {
  state = { ...initialState }
  renderForm(){ 
    return( 
    
      <div className="contato">
      <div className="container">
      <h1>CONTATO</h1>
      <div className="row">
        <form prevent>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Nome" name="nome" type="text"  value={this.state.msg.nome} onChange={e => this.updateField(e)}/> 
           
            <input id="email"  placeholder="Email" name="email"  value={this.state.msg.email} onChange={e => this.updateField(e)}/>  

            <textarea className="text-area" onchange="alert('You just changed the textarea.')" placeholder="Escreva aqui a sua mensagem."> </textarea>
            <button className="btn btn-primary" onClick={e => this.save(e)}>
                              Enviar
            </button> 
            </div>


            
          </div>
 
 

           
       

      </form>
    </div> 
    </div>
    </div>  
    )
  }

  updateField(event) {
    const msg = { ...this.state.msg }
    msg[event.target.name] = event.target.value
    this.setState({ msg })
  } 

  render() {
    return ( 
      <React.Fragment>
            {this.renderForm()}  
      </React.Fragment>
    )
  }

  save(e) {
    e.preventDefault();
    console.log("Entrou save!")
    const msg = this.state.msg
    const method = 'post'
    const url = baseUrl
    axios[method](url, msg)
        .then(resp => { 
            this.setState({ msg: initialState.msg})
        })
  }
}