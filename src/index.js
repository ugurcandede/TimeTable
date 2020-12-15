import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux'
import configureStore from "./redux/reducers/configureStore";

const store = configureStore()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
