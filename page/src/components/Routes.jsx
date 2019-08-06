import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Exp from './Exp' 

export default props => 
    <Switch> 
        <Route path='/exp' component={Exp} /> 
        <Redirect from='*' to='/' />
     </Switch>