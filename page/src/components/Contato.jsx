import React, { Component } from 'react'
import Main from './Main'
import axios from 'axios'
import './Contato.css'


const initialState = {
  msg: { nome: '', email: '', mensagem: '' } 
} 

const baseUrl = 'http://localhost:3001/mensagem'

export default class Contato extends Component {
  state = { ...initialState }
  renderForm(){ 
    return( 
      <div className="row">
        <form className="col s12" prevent>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Nome" name="nome" type="text"  value={this.state.msg.nome} onChange={e => this.updateField(e)}/> 
            </div>
          </div>

  
  
        <div className="row">
          <div className="input-field col s12">
            <input id="email"  placeholder="Email" name="email"  value={this.state.msg.email} onChange={e => this.updateField(e)}/> 
          </div>
        </div>

        <div className="row"> 
            <div className="row">
              <div className="input-field col s12">
                <textarea className="materialize-textarea" name="mensagem" placeholder="Mensagem" value={this.state.msg.mensagem} onChange={e => this.updateField(e)}></textarea> 
              </div>
            </div>

            <button className="btn btn-primary" onClick={e => this.save(e)}>
                              Enviar
            </button> 
        </div>

      </form>
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
        <Main >
            {this.renderForm()} 
        </Main>
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