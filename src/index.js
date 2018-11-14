import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {HashRouter} from 'react-router-dom';
import { createStore } from "redux";
import {Provider} from 'react-redux';
import reducers from '../src/reducers/usersReducer';

const store = createStore(reducers);


ReactDOM.render(
    <Provider store = {store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
, document.getElementById('root'));


