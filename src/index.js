import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import configStore from "./store/configStore";
import {Provider} from "react-redux";//数据传输


import "./commen/css/reset.css";
import * as serviceWorker from './serviceWorker';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
