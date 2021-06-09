import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessageCB, addPostCB, StateType} from "./redux/state";

export let rerenderEntireTree = ((state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPostCB={addPostCB}
                    addMessageCB={addMessageCB}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
});

