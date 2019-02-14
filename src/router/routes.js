import React from 'react'
import {Route, Switch} from 'react-router'


import Login from '@/pages/login'
import NoMatch from '@/pages/404'
import Common from '@/components/common'
import Home from '@/pages/home'

const routes = (
  <Switch>
    <Route path="/" exact component={Login}></Route>    
    <Route path="/login" component={Login}></Route>
    <Route path="/common" component={Common}></Route>
    <Route path="/home" component={Home}></Route>
    <Route component={NoMatch}></Route>
  </Switch>
);

export default routes