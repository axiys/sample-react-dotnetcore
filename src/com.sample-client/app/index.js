import React from 'react';
import ReactDOM from 'react-dom';

import ES6Promise from 'es6-promise';

ES6Promise.polyfill();

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'

import SystemTest from './components/SystemTest';

ReactDOM.render(
    <SystemTest/>,
    document.getElementById('root')
);