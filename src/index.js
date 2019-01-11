import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
// 引入 window.fetch polyfill
import 'whatwg-fetch' 

// 路由
import {BrowserRouter as Router} from 'react-router-dom'
import routes from '@/router/routes'
// 状态管理


ReactDOM.render((
  <Router>
    {routes}
  </Router>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();