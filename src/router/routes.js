import React from 'react'
import {Route, Switch} from 'react-router'
import pathMap from '@/router/pathMap'


import Login from '@/pages/login'
import NoMatch from '@/pages/404'
// import Common from '@/components/common'
// import Home from '@/pages/home'

const keys = Object.keys(pathMap) 
const routes = (
  <Switch>
    <Route path="/" exact component={Login}></Route>

    {keys.map(key=> <Route key={key} path={pathMap[key].path} component={pathMap[key].component}></Route> )}
    
    {/* <Route path="/login" component={Login}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/common" component={Common}></Route> */}
    <Route component={NoMatch}></Route>
  </Switch>
);

export default routes