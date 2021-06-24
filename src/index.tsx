import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {StateType, subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessageCB, addPostCB, updateNewMessageText, updateNewPostText} from "./redux/state";

let rerenderEntireTree = ((state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPostCB={addPostCB}
                    addMessageCB={addMessageCB}
                    updateNewPostText={updateNewPostText}
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
});

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
