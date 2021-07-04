import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

let rerenderEntireTree = (() => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    store={store}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
});

rerenderEntireTree();

store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
