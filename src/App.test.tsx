import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from "./redux/state";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App state={state} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
