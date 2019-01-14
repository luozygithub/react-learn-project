import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入css样式
import "./stylesheets/main.scss"
//引入rem.js
import "./modules/rem"
//引入axios-util/index.js
import "./modules/axios-util"
//引入Router
import {HashRouter as Router} from "react-router-dom"

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
