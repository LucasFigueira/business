import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Exp from './Exp'
import Home from './Home'
import Contato from './Contato';

export default props => 
    <Switch>  
        <Route exact path='/' component={Home} />
        <Route path='/exp' component={Exp} /> 
        <Route path='/contato' component={Contato} /> 
        <Redirect from='*' to='/' />
     </Switch>